$(document).ready(function () {
    let campo = ''
    $('#campo').keyup(function (e) { 
        $('#sla').text(this.value);

        campo = this.value;
    });


    $('button').click(function (e) { 
        e.preventDefault();

        $("#campo2").children("p").text(campo);
    });

    $('p').each(function (index) {
        $(this).text(campo);
    });
});

