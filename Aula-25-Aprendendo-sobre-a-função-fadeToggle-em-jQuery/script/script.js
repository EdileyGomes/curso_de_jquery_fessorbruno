

$('.itemMenu').mouseover(function () { 
    $(this).siblings().fadeTo(100, 0.5);
    $(this).css({'transform': 'scale(1.1)', 'transition': 'transform 0.3s'});
});

$('.itemMenu').mouseleave(function () { 
    $(this).siblings().fadeTo(0 ,1);
    $(this).css({'transform': 'scale(1)'});
});


$("#menujQuery").click(function () {
    $("#subMenujQuery").fadeToggle(500)
    $("#subMenujQuery").css('display', 'flex');
})

$("#menuCanvas").click(function () {
    $("#subMenuCanvas").fadeToggle(500)
    $("#subMenuCanvas").css('display', 'flex');
})

$("#menuPython").click(function () {
    $("#subMenuPython").fadeToggle(500)
    $("#subMenuPython").css('display', 'flex');
})

$("#menuArduino").click(function () {
    $("#subMenuArduino").fadeToggle(500)
    $("#subMenuArduino").css('display', 'flex');
})