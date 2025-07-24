$('#btn-mostrar').click(function (e) { 
    e.preventDefault();
    
    $('#caixa').show(1000);
});

$('#btn-ocultar').click(function (e) { 
    e.preventDefault();
    
    $('#caixa').hide(2000);
});