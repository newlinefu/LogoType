$(function () {

    $('.slider-inner , .news_slider-inner').slick({
        prevArrow: '<button type="button" class="slick-prev slide_button"></button>',
        nextArrow: '<button type="button" class="slick-next slide_button"></button>',
        infinite: false
    });

    $('select').styler();

});