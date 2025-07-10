$('#caixa').click(function (e){
    e.preventDefault()

    $(this).attr('class', 'azul')
    $(this).attr()
})

$('#btn-vermelho').click(function (e) { 
    e.preventDefault();
    
    $('#caixa').css('color', 'black')
    $("#caixa").attr('class', 'vermelho')
});

$('#btn-azul').click(function (e) { 
    e.preventDefault();
    
    $('#caixa').css('color', 'white')
    $("#caixa").attr('class', 'azul')
});