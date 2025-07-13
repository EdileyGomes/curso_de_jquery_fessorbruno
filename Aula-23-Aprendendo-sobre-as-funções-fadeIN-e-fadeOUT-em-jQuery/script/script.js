$(document).ready(function () {
    // função de loop bola vermelha
    function loopBola() {
        $(".bola").fadeOut().fadeIn(2000, loopBola)
    }
    loopBola()


    $('#btn-mostrar').click(function (e) {
        e.preventDefault();


        $("#caixa").fadeIn()
    });

    $('#btn-ocultar').click(function (e) {
        e.preventDefault();


        $("#caixa").fadeOut()
    });


    $("#btn-ocultarmostrar").click(function (e) {
        e.preventDefault();

        $("#caixa").delay(1500).fadeToggle()
    })
});


