$('.bloco').on({
    click: () => {
        $('#texto').text('Clique Normal');
    },
    mouseenter: () => {
        $('#texto').text('Mouse Entrou no bloco');
    },
    mouseleave: () => {
        $('#texto').text('Mouse saiu do Bloco');
    },
    mousemove: (e) => {
        $('#texto').html(`Valor de Y:${e.pageY}<br /> Valor de X: ${e.pageX}`);
    }
});