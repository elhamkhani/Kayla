$(document).ready(function () {

    
    $(".gallery .cover").hover(function () {
        if ($(this).hasClass("initialised")) {
            $(this).attr("style", "background-image:url(img/c" + Math.floor((Math.random() * 9) + 1) + ".png)");
            $(this).removeClass("initialised");
        }else
        {
            $(this).attr("style", "background-image:url(photos/" + Math.floor((Math.random() * 100) + 1) + ".jpg)");
            $(this).addClass("initialised");
        }
    });

    $(".gallery .cover").click(function () {
        $(".main-image").attr("style", $(this).attr("style"));

    });



});


$("").fallings({

    velocity: 0,
    initialPosition: 0,
    bgParallax: false,
    bgPercent: "0%",
    onClass: "fallings-visible",
    offClass: "fallings-invisible"

});


$(function () {
    $('a[href*="#"]:not([href="#"]), .cover').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});