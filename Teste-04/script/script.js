$(document).ready(function () {
    function animarBola() {
        $("#bola").fadeOut(500).fadeIn(500, animarBola).delay(2500);
    }

    animarBola(); // inicia o loop
})