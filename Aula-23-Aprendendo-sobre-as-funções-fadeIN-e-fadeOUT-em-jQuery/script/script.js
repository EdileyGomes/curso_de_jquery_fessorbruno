$(document).ready(function () {
    $('#btn-mostrar').click(function (e) {
        e.preventDefault();


        $("#caixa").fadeIn()
    });

    $('#btn-ocultar').click(function (e) {
        e.preventDefault();


        $("#caixa").fadeOut()
    });

    $('#btn-ocultarmostrar').click(function (e) {
        e.preventDefault();

        $("#caixa").fadeToggle()
    });
    let i = 0
    for (i = 0; i < 2; i++){
        $('.bola').click(function (e) { 
        e.preventDefault();
        
        $(this).fadeIn(1000).delay(1000).fadeOut(1000)
        i = 0
    }); 
}
});


