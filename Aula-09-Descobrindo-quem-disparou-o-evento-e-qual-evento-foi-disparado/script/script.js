$(document).on({
    click: (e) => {
        $('#resultado').text(`${e.type} : ${e.which}`)

        if (e.which == 1) {
            $("#texto1").text('CFB Cursos');
        }
    },
    keydown: (e) => {
        $('#resultado').text(`${e.type} : ${e.which}`)

        if (e.which == 13) {
            $('#texto1').html(`Clicou no tecla <strong>ENTER</strong>`);
        }else {
            $("#texto1").text('CFB Cursos');
        }
    }
});