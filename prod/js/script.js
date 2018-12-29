$(document).ready(function(){

    // sticky header

    $(window).scroll(function() {
        var sticky = $('.mainbar'),
            scroll = $(window).scrollTop();

        if (scroll >= 83) {
            sticky.addClass('fixed');
        } else {
            sticky.removeClass('fixed');
        }
    });

    // filter toggle
    $('.search-filter-toggle').click(function(){
       $('.search-filters__content').toggleClass('search-filters__content--hide');
       if($('.search-filters__content').hasClass('search-filters__content--hide')){
           $(this).find('span').text('Отрыть параметры поиска')
       }
       else{
           $(this).find('span').text('Скрыть параметры поиска')
       }
    });

    //tabs
    $('.tab-box__button').click(function(){
        tabid = $(this).attr('tabid');
        $('.tab-box__button').removeClass('tab-box__button--active');
        $(this).addClass('tab-box__button--active');
        $('.tab-box__content').removeClass('tab-box__content--active');
        $('#'+tabid).addClass('tab-box__content--active');
    });

    //checkbox
    $('.checkbox input').change(function(){
        if($(this).is(":checked")){
            $(this).parent().addClass('checkbox--active');
        }else{
            $(this).parent().removeClass('checkbox--active');
        }
    });

    //switcher
    if($('.switcher input').is(":checked")){
        $(this).parent().addClass('switcher--active');
        $('.profile-card').css('opacity',1);
        $(this).parents('.status-button').find('span').text('Временно занят');
    }else{
        $(this).parent().removeClass('switcher--active');
        $('.profile-card').css('opacity',0.5);
        $(this).parents('.status-button').find('span').text('Свободен');
    }

    $('.switcher input').change(function(){
        if($(this).is(":checked")){
            $(this).parent().addClass('switcher--active');
            $('.profile-card').css('opacity',1);
            $(this).parents('.status-button').find('span').text('Свободен');
        }else{
            $(this).parent().removeClass('switcher--active');
            $('.profile-card').css('opacity',0.5);
            $(this).parents('.status-button').find('span').text('Временно занят');
        }
    });

    // profile drop down
    // $('.profile-img').hover(function(){
    //     $(this).find('.profile-dd').addClass('profile-dd--active');
    // },function(){
    //     setTimeout(function(){
    //         $('.profile-dd').removeClass('profile-dd--active');
    //     },1000);
    // });

    $('.profile-img').click(function(){
        $(this).find('.profile-dd').toggleClass('profile-dd--active');
    });


});

