let pmX = 0
let pmY = 0

$(document).ready(function () {
    $(document).mousemove(function (e) { 
        let pmX = e.pageX
        let pmY = e.pageY
        $('#texto').html(`Valor do X: ${e.pageX} <br /> Valor do Y: ${e.pageY}`);

        console.log(`X: ${pmX}`)
        console.log(`Y: ${pmY}`)

        if (e.pageY < 500) {
            $('#texto2').html(`Está abaixo de 500`);
        } else {
            $('#texto2').html(`Está acima de 500`);
        }
    });
});
