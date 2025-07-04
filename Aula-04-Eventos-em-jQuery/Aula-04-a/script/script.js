$(document).ready(function () {
    // função para mostrar um texto ao clicar no quadrado
    $('#bloco').click(function (e) {
        e.preventDefault();

        $('#texto').text('Clicou no quadrado.');
    });
    //função para mostrar um texto ao colocar o mouse sobre o quadrado
    $('#bloco').mouseenter(function () {

        $('#texto').text('Entrou no quadrado.');
    });
    //função para mostrar um texto ao colocar o mouse fora do quadrado
    $('#bloco').mouseleave(function () {

        $('#texto').text('saiu do quadrado.');
    });
    //freestyle que acabei fazendo para testar umas coisas
    $('#bloco').mousemove(function (e) { 
        $('#texto').html(`X:${e.pageX} <br /> Y: ${e.pageY}`);
        
        if (e.pageX == 10 || e.pageY == 130) {
            alert('Passou pelo 10, ou pelo 130')
        }
    });

    $(selector).mousemove(function (e) { 
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        
    });
});
