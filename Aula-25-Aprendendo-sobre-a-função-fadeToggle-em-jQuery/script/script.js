$('.itemMenu').mouseover(function () {
    $(this).fadeTo(100, 0.2);
});

$('.itemMenu').mouseout(function () {
    $(this).fadeTo(100, 1);
});

$("#menujQuery").click(function () {
    $("#subMenujQuery").fadeToggle(100);
    $("#subMenujQuery").css({'display': 'flex', 'padding':'10px'}); 
    $(".itemSubMenu").css({'padding':'20px'})
});
$("#menuCanvas").click(function () {
    $("#subMenuCanvas").fadeToggle(100);
    $("#subMenuCanvas").css({'display': 'flex', 'padding':'10px'}); 
    $(".itemSubMenu").css({'padding':'20px'}) 
});
$("#menujQuery").click(function () {
    $("#subMenujQuery").fadeToggle(100);
    $("#subMenujQuery").css({'display': 'flex', 'padding':'10px'}); 
    $(".itemSubMenu").css({'padding':'20px'})
});
$("#menujQuery").click(function () {
    $("#subMenujQuery").fadeToggle(100);
    $("#subMenujQuery").css({'display': 'flex', 'padding':'10px'}); 
    $(".itemSubMenu").css({'padding':'20px'})
});

