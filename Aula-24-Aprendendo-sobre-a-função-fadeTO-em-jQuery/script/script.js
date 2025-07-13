
$("#menu").children().on({
    mouseenter: function() {
        $(this).siblings().fadeTo(500, 0.5);
    },
    mouseleave: function() {
        $(this).fadeTo(500, 1);
    },
})