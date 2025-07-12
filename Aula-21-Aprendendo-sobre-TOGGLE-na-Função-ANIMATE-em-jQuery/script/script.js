$("#btn-tamanho").click(function() {
    $("#caixa").animate({
        width:'toggle',
        height:'toggle'
    })
})

$("#btn-mostrar").click(function () {
    $('#caixa').animate({
        opacity:'toggle',
        fontSize: 'toggle',
    })
})