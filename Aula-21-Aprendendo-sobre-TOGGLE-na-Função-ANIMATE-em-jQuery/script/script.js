$('#btn-tamanho').click(function (e) { 
    e.preventDefault();
    
    $('#caixa').animate({width:'toggle', height:'toggle'})
});

$('#btn-mostrar').click(function (e) { 
    e.preventDefault();
    
    $('#caixa').animate({})
});