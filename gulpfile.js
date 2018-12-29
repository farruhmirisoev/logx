var gulp = require('gulp'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    prefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    pug = require('gulp-pug'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

gulp.task('pug', function () {
        gulp.src('dev/views/*.pug')
            .pipe(plumber())
            .pipe(pug({
                doctype: 'html',
                pretty: true
            }))
            .pipe(gulp.dest('prod/'))
            .pipe(reload({stream: true}));
    });

gulp.task('styles', function () {
    gulp.src('dev/styles/main.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('prod/css/'))
        .pipe(reload({stream: true}));
});

gulp.task('watch', function(){
    watch('dev/views/**/*.pug', function(event, cb) {
        gulp.start('pug');
    });
    watch('dev/styles/**/*.scss', function(event, cb) {
        gulp.start('styles');
    });
    watch('prod/*.html', function(event, cb) {
        gulp.src('prod/*.html')
            .pipe(reload({stream: true}));
    });
});

gulp.task('webserver', function () {
    var config = {
        // server: {
        //     baseDir: "./prod"
        // },
        proxy:'logx.ui'
        // host: 'localhost',
        // port: 9000
    };

    browserSync(config);
});

gulp.task('default', ['pug', 'styles', 'webserver', 'watch']);