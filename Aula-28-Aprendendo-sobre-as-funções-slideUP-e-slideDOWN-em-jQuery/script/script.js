const cx = $()

function sla() {
    alert('Olá, Mundo')
}

$('#btn-cima').click(function (e) { 
    e.preventDefault();
    
    $(".btn-menu").fadeOut(500)
    $('#menus').delay(400).slideUp(1000)
});

$('#btn-baixo').click(function (e) { 
    e.preventDefault();
    
    $('#menus').slideDown(500).delay(3000);
    $(".btn-menu").delay(700).fadeIn(1000)
});

$('#toggle').click(function (e) { 
    e.preventDefault();
    
    $('#menus').slideToggle();
});