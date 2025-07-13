$("#btn-tamanho").click(() => {
    $("#caixa").animate({
        width:"toggle",
        height:"toggle"
    })
})

$("#btn-mostrar").click(() => {
    $("#caixa").animate({opacity:"toggle", fontSize:"toggle"})
})