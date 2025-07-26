$('#btn-mostrar').click(function (e) { 
    e.preventDefault();
    
    $("#caixa").fadeIn()
});

$('#btn-ocultar').click(function (e) { 
    e.preventDefault();
    
    $("#caixa").fadeOut()
});

$(document).ready(function () {
    
    let continuarPiscando = true

    function piscarBola() {
        if (!continuarPiscando) return;

        $('.bola').fadeIn(1000).delay(1000).fadeOut(1000, piscarBola);
    }

    piscarBola()

    $('#btn-ocultarmostrar').click(function (e) { 
        e.preventDefault();
        
        continuarPiscando = !continuarPiscando; // inverte a flag

        if (continuarPiscando) {
            piscarBola(); // reinicia se estava parado
        }
});
})
