$(document).ready(function () {
    $('.bloco1').on({
        click: () => {
            $('#texto').html(`Clicou no botão`);
        },
        mouseleave: () => {
            $('#texto').html(`Saiu do Quadrado`);
        },
        mouseenter: () => {
            $('#texto').html(`Entrou no Quadrado`);
        },
        mousemove: (e) => {
            $('#texto').html(`Posição X: ${e.pageX} <br />Posiçaõ Y: ${e.pageY}`);
        },
        dblclick: () => {
            $('#texto').html(`Clique Duplo.`);
        }
    });

    $('.bloco2').click(() => {
        $('.bloco1').trigger('click')
        $('.bloco1').trigger('dblclick')
    });
});


