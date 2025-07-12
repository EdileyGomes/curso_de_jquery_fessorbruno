$('#aumentar').click(function() {
    $('#caixa').animate({
        'width':'500px',
        'height':'500px',
    })
})

$('#diminuir').click(function() {
    $('#caixa').animate({width:'200px'}).animate({height:'200px'}, {duration: 100})
})

$('#direita').click(function() {
    $('#caixa').animate({left:'500px'},{duration: 200, complete:() => {
        alert('Animação concluída!')
    }})
})

$('#esquerda').click(function() {
    $('#caixa').animate({left:'0px'},{duration: 200})})
