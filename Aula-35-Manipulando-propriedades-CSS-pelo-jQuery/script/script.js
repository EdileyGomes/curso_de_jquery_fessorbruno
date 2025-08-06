$("#btn-vermelho").click(function (e) { 
    e.preventDefault();
    

    $('#caixa').css({'background-color':'red'});
});

$("#btn-verde").click(function (e) { 
    e.preventDefault();
    
    $('#caixa').css({'background-color':'green'});
});

$("#btn-azul").click(function (e) { 
    e.preventDefault();
    
    $('#caixa').css({'background-color':'blue'});
});