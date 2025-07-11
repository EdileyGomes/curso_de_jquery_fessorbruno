$('#aumentar').click(function (e) { 
    e.preventDefault();
    
    $('#caixa, #caixa2').animate({width:"500px", height:'500px'})
});

$('#diminuir').click(function (e) { 
    e.preventDefault();
    
    $('#caixa, #caixa2').animate({width:"200px"}).animate({height:'200px'},{duration: 1000})
});

$('#direira').click(function (e) { 
    e.preventDefault();
    e.stopPropagation();
    
    $('#caixa').animate({left:'500px'},{duration:200, complete: function() {
        alert('Animação concluída para a direita!');
    }} )
});

$('#esquerda').click(function (e) { 
    e.preventDefault();
    e.stopPropagation();
    
    $('#caixa').animate({left:'0px'},{duration:1000, complete: function() {
        alert('Animação concluída para a Esquerda!');
    }} )
});