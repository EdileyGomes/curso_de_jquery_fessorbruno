$('#btn-tggle').click(function (e) { 
    e.preventDefault();
    
    $('#caixa').toggle(500, function() {
        if ($(this).is(':visible')){
            $('#btn-tggle').text('Ocultar');
        } else {
            $('#btn-tggle').text('Mostrar');
        }
    })
});