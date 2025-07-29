$('.itemMenu').mouseover(function () { 
    $(this).siblings().finish()
    $(this).siblings().fadeTo(100, 0.5)
});

$('.itemMenu').mouseleave(function () { 
    $(this).siblings().finish()
    $(this).siblings().fadeTo(100, 1)
});

$('#menujQuery').click(function (e) { 
    e.preventDefault();
    
    if ($('#subMenuCanvas').is(':visible') || $('#subMenuPython').is(':visible') || $('#subMenuArduino').is(':visible')) {
        $('#subMenuCanvas').fadeOut()
        $('#subMenuPython').fadeOut()
        $('#subMenuArduino').fadeOut()

        $('#subMenujQuery').fadeToggle()
        $('#subMenujQuery').css({display:"flex"})

    } else {
        $('#subMenujQuery').fadeToggle()
        $('#subMenujQuery').css({display:"flex"})
    }
});

$('#menuCanvas').click(function (e) { 
    e.preventDefault();
    
    if ($('#subMenujQuery').is(':visible') || $('#subMenuPython').is(':visible') || $('#subMenuArduino').is(':visible')) {
        $('#subMenujQuery').fadeOut()
        $('#subMenuPython').fadeOut()
        $('#subMenuArduino').fadeOut()

        $('#subMenuCanvas').fadeToggle()
        $('#subMenuCanvas').css({display:"flex"})

    } else {
        $('#subMenuCanvas').fadeToggle()
        $('#subMenuCanvas').css({display:"flex"})
    }
    
});

$('#menuPython').click(function (e) { 
    e.preventDefault();
    
    if ($('#subMenuCanvas').is(':visible') || $('#subMenujQuery').is(':visible') || $('#subMenuArduino').is(':visible')) {
        $('#subMenuCanvas').fadeOut()
        $('#subMenujQuery').fadeOut()
        $('#subMenuArduino').fadeOut()

        $('#subMenuPython').fadeToggle()
        $('#subMenuPython').css({display:"flex"})

    } else {
        $('#subMenuPython').fadeToggle()
        $('#subMenuPython').css({display:"flex"})
    }
});

$('#menuArduino').click(function (e) { 
    e.preventDefault();
    
    if ($('#subMenuCanvas').is(':visible') || $('#subMenuPython').is(':visible') || $('#subMenuArduino').is(':visible')) {
        $('#subMenuCanvas').fadeOut().finish()
        $('#subMenuPython').fadeOut()
        $('#subMenujQuery').fadeOut().finish()

        $('#subMenuArduino').fadeToggle()
        $('#subMenuArduino').css({display:"flex"})

    } else {
        $('#subMenuArduino').fadeToggle()
        $('#subMenuArduino').css({display:"flex"})
    }
});