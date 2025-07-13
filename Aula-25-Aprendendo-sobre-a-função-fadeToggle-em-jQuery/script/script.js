$("#menu").children().on({
    mouseenter: function() {$(this).siblings().stop(true, true).fadeTo(500,0.4)},
    mouseleave: function() {$(this).siblings().stop(true, true).fadeTo(500,1)}
})

$("#menu").children().on("click", function() {
    $(this).fadeToggle(5000, function() {
        $(this).siblings().fadeTo(5000, 0.4);
    });
})