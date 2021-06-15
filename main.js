$(document).ready(function(){
    $('.next').on('click', function(){
        var currentSlide=$('.slide.active');
        var nextImg=currentSlide.next();
        
        currentSlide.removeClass('active').css('z-index', -10);
        nextImg.addClass('active').css('z-index', 10)
        
    });

    $('.prev').on('click', function(){
        var currentSlide=$('.slide.active');
        var prevImg=currentSlide.prev();

        console.log($('.slide'));

        currentSlide.removeClass('active').css('z-index', -10);
        prevImg.addClass('active').css('z-index', 10);

    
    });


});