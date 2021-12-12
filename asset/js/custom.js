jQuery(document).ready(function () {
    jQuery('.links  a[href^="#"]').click(function () {
        var hTopMenu = $('.top-menu').height();
        var top = $(this.hash).offset().top - hTopMenu;
        // console.log(hTopMenu);
        jQuery('html,body').animate({scrollTop: top}, 500);
        return false;
        // e.preventDefault();

    });
    jQuery('.panel-heading').on('click touchstart', function () {
        jQuery(jQuery(this).data('target')).collapse('toggle');
    });
    blockService();
    clickMenu();
    menuFixed();
    menuFixedMobile();

    var rubyslider = $('.rs01').rubyslider();
    $('.next').on('click', function () {
       rubyslider.next();
        e.preventDefault();
    });
    $('.back').on('click', function () {
       rubyslider.prev();
        e.preventDefault();
    });
});

/******************************
 ***** Show error if have *****
 ******************************/


window.onerror = function (msg, url, linenumber) {
    if (typeof (console) != 'undefined') {
        console.log('Error message: ' + msg + '\nURL: ' + url + '\nLine Number: ' + linenumber);
    }
    return false;
};
/******************************
 ***** Functions built in *****
 ******************************/

// jQuery(window).bind('scroll', function () {
//     var menu = $('#masthead');
//     if (jQuery(window).scrollTop() > 100) {
//         menu.addClass('fixed');
//     } else {
//         menu.removeClass('fixed');
//     }
// });


getData = function () {
    var name = jQuery('.owl-stage .owl-item.center a').data("name");
    var sub = jQuery('.owl-stage .owl-item.center a').data("sub");
    var content = jQuery('.owl-stage .owl-item.center a').data("content");
    var img = jQuery('.owl-stage .owl-item.center a img').attr('src');

    jQuery(".content-feedback .avatar img").attr('src', img);
    jQuery(".content-feedback .comment h3").html(name);
    jQuery(".content-feedback .comment .sub").html(sub);
    jQuery(".content-feedback .comment .description-comment p").html(content);
}

clickMenu = function () {
    $menuLeft = jQuery('.pushmenu-left');
    $nav_list = jQuery('.buttonset');
    $close_menu = jQuery('.nav_list_menu');

    $nav_list.click(function () {
        jQuery(this).toggleClass('active');
        jQuery('.pushmenu-push').toggleClass('pushmenu-push-toright');
        $menuLeft.toggleClass('pushmenu-open');
    });
    $close_menu.click(function () {
        jQuery(this).toggleClass('active');
        jQuery('.pushmenu-push').toggleClass('pushmenu-push-toright');
        $menuLeft.toggleClass('pushmenu-open');
    });
}


blockService = function () {
    jQuery('.block-service .btn-more a').click(function(){
        jQuery(this).text(function(i,old){
            // console.log(old);
            // return false;
            return old=='Xem thêm' ?  'Thu gọn' : 'Xem thêm';
        });
    });
}
menuFixed = function () {
    /* affix the navbar after scroll below header */
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.top-menu').addClass('menu-fixed');
        } else {
            $('.top-menu').removeClass('menu-fixed');
        }
    });
}

menuFixedMobile = function () {
    /* affix the navbar after scroll below header */
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.btn-group-justified').addClass('menuMobile-fixed');
        } else {
            $('.btn-group-justified').removeClass('menuMobile-fixed');
        }
    });
}

function animation() {
    var window_height = $(window).height();
    var window_top_position = $(window).scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    function animate_on_scroll($element, $animation_elements) {
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass($animation_elements);
        } else {
            $element.removeClass($animation_elements);
        }
    }
    animate_on_scroll($('.img'), 'animated zoomIn');
    animate_on_scroll($('.data-slider .box-1'), 'animated fadeInRight');
    animate_on_scroll($('.data-slider .box-2'), 'animated fadeInRight');
    animate_on_scroll($('.data-slider .box-3'), 'animated fadeInRight');
    animate_on_scroll($('.data-slider .box-4'), 'animated fadeInRight');
    animate_on_scroll($('.form-online'), 'animated fadeInLeft');
    animate_on_scroll($('.icon-citibank'), 'animated slideInDown');
    animate_on_scroll($('.icon-sacombank'), 'animated slideInDown');
    animate_on_scroll($('.panel-group'), 'animated rollIn');
}

$(window).on('scroll resize', animation);
$(window).trigger('scroll');