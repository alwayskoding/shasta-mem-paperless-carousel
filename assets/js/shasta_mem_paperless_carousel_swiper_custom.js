(function () {
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        noSwiping: true, //set to false if want slide functionality
        allowSlidePrev: true, //set to true if want to slide
        allowSlideNext: true, //set to true if want to slide
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },

        // If we need pagination uncomment this method
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })
})();