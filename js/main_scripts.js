$(document).ready(function(){
    $('.profile-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
    $('.testimonial-carousel').owlCarousel({
        loop:true,
        center: true,
        margin:10,
        nav:true,
        singleItem:true,
        dots: false,
        onDragged: callback,
        onTranslated: callback,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });
    function callback(event) {
        $('.testimonial-carousel .owl-item').removeClass('prev next');
        $('.testimonial-carousel .owl-item.active.center').prev().addClass('prev');
        $('.testimonial-carousel .owl-item.active.center').next().addClass('next');
    }
    callback();
});