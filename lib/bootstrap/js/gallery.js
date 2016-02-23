$(document).ready(function () {

    $(".gallery .cover").hover(function () {

        var realPic = $(this).attr("data-real-pic");
        var coverPic = $(this).attr("data-cover-pic");
        $(this).attr("style", "background-image:url(" + realPic + ")");
        $(this).attr("data-cover-pic", realPic);
        $(this).attr("data-real-pic", coverPic);

    });


    $(".gallery .cover").click(function () {
        $(".main-image").attr("style", "background-image:url(" + $(this).attr("data-cover-pic") + ")");

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