cont = 0
$('#caixa').click(function (e) {
    
    if (cont == 0) {
        $(this).attr('class', 'azul')

        cont ++
    } else {
        $(this).attr('class', 'vermelho')
        cont = 0
    }
})

$('#btn-azul').click(function() {
    $('iframe').attr('src','https://www.youtube.com/embed/WiKsK0kmzlU?si=2QbzF2NfvrswHexU')
})
$("#btn-vermelho").click(function() {
    $('iframe').attr('src','https://www.youtube.com/embed/Homo-ORr-9o?si=azoCxCitm5MGDc6o')
})
