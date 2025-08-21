$('#btn-posição').click( function(){
    let pt = $('#caixa').position().top
    let pl = $("#caixa").position().left
    let ot = $('#caixa').position().top
    let ol = $("#caixa").position().left

    alert("top: " + pt + ", left: " + pl + " || offset top: " + ot + ", offset left: " + ol)
})

$("#top").change((e) => {
    let valor = document.getElementById(e.target.id).value
    $("#caixa").offset({ top: valor})
})

$("#left").change((e) => {
    let valor = document.getElementById(e.target.id).value
    $("#caixa").offset({ left: valor })
})