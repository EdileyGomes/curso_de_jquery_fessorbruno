$(".itemMenu").mouseover(function () {
    $(this).stop(true).fadeTo(300, 1);
    $(this).siblings().stop(true).fadeTo(300, 0.4);
});

$(".itemMenu").mouseleave(function () {
    $(".itemMenu").stop(true).fadeTo(300, 1);
});