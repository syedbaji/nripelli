$(document).ready(function(){
    $('.bring-people-carousel').owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        onDragged: bringPeopleCarouselCallback,
        onTranslated: bringPeopleCarouselCallback,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });
    $('.main-slider-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
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
    function bringPeopleCarouselCallback(event) {
        $('.bring-people-carousel .owl-item').removeClass('prev next');
        $('.bring-people-carousel .owl-item.active.center').prev().addClass('prev');
        $('.bring-people-carousel .owl-item.active.center').next().addClass('next');
    }
    bringPeopleCarouselCallback();
});