$(document) .ready (function () {

    $nav= $('.navbar');
    $toggleCollapse = $('.navbar .collapse');

    /** click event on toggle menu */
    $toggleCollapse.click (function () {
        $nav.toggleClass ('uncollapse');
    })
    $(".owl-carousel") .owlCarousel({
        mouseDrag:true,
        loop:true,
        autoplay:true,
        autoplayTimeout: 3000,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
            },
            700:{
                items:2,
            },
            1000: {
                items:3,
            }
        }
    });
})