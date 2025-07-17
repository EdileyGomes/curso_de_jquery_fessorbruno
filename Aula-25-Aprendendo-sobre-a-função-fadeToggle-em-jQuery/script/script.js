

$('.itemMenu').mouseover(function () { 
    $(this).siblings().fadeTo(100, 0.5);
    $(this).css({'transform': 'scale(1.1)', 'transition': 'transform 0.3s'});
});

$('.itemMenu').mouseleave(function () { 
    $(this).siblings().fadeTo(100, 1);
    $(this).css({'transform': 'scale(1)'});
});


$("#menujQuery").click(function () {
    $("#subMenujQuery").fadeToggle(1000)
})
