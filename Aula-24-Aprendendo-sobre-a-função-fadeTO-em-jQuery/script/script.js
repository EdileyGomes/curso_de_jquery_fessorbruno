$("#menu").children().on(
    'mouseenter', function (){
        $(this).siblings().fadeTo(500, 0.5);
    
})

$("#menu").children().on("mouseleave", function () {
    $(this).siblings().fadeTo(200, 1);
});