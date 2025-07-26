$('#btn-tamanho').click(function (e) { 
    e.preventDefault();
    
    $('#caixa').animate({width:'toggle', height:'toggle'})
});


$('#btn-mostrar').click(function (e) { 
    e.preventDefault();
    
    function alerta() {
        alert('Animação Acabada')
    }

    $('#caixa').animate({opacity:'toggle'})
    $('#sla').animate({width:"toggle", height:"toggle"}, 500, alerta)
});