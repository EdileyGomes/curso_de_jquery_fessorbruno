
$("#menu").children().on({
    mouseenter: function() {
        $(this).siblings().stop(true, true).fadeTo(300, 0.5);
    },
    mouseleave: function() {
        $(this).siblings().stop(true, true).fadeTo(300, 1);
    },
})