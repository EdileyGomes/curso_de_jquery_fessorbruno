$('#btn-vermelho').click(function (e) { 
    e.preventDefault();
    
    $("#caixa").removeClass("azul")
    $("#caixa").removeClass("verde")
    $('#caixa').addClass('vermelho');
});

$('#btn-verde').click(function (e) { 
    e.preventDefault();
    
    $("#caixa").removeClass("azul")
    $("#caixa").removeClass("vermelho")
    $('#caixa').addClass('verde');
});

$('#btn-azul').click(function (e) { 
    e.preventDefault();
    
    $("#caixa").removeClass("vermelho")
    $("#caixa").removeClass("verde")
    $('#caixa').addClass('azul');
});