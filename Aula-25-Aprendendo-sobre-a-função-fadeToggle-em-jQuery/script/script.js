$('.itemMenu').mouseover(function () { 
    $(this).siblings().stop()
    $(this).siblings().fadeTo(100, 0.5)
});

$('.itemMenu').mouseleave(function () { 
    $(this).siblings().stop()
    $(this).siblings().fadeTo(100, 1)
});

$('#menujQuery').click(function (e) { 
    e.preventDefault();
    
    $('#subMenujQuery').fadeToggle()
    $('#subMenujQuery')
});