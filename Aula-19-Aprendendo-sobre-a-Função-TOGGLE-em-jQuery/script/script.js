cont = 0
$('#btn-tggle').click(function (e) { 
    e.preventDefault();
    
    $('#caixa').toggle();

    if ($('#caixa').is(':visible')) {
        $('#btn-tggle').text('Ocultar');
    } else {
        $('#btn-tggle').text('Mostrar')
    }
});