$('#btn-posição').click( function(){
    let top = $('#caixa').position().top
    let left = $("#caixa").position().left

    console.log(top, left)

    if (top > 200 && top < 230) {
        $("#caixa").css("background-color", "blue")
    } else {
        $("#caixa").css("background-color", "red")
    }
})

$("#top").change((e) => {
    let valor = document.getElementById(e.target.id).value
    $("#caixa").css("top", valor + "px")
})

$("#left").change((e) => {
    let valor = document.getElementById(e.target.id).value
    $("#caixa").animate().css("left", valor + "px")
})