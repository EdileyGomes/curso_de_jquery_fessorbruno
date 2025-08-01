const cx = $('#caixa')

$('#btn-animar').click(function (e) { 
    e.preventDefault();
    
    cx.animate({left:'800px'},{duration:2000})
    cx.animate({top:'400px'},{duration:2000})
    cx.animate({left:'00px'},{duration:2000})
    cx.animate({top:'50px'},{duration:2000})
});

$('#btn-proxima').click(function (e) { 
    e.preventDefault();
    

    cx.stop(false, false)// limpar fila, segunda parametro é pular para o fim
});

$('#btn-parar').click(function (e) { 
    e.preventDefault();
    
    cx.stop(true, false)
});

$('#btn-fim').click(function (e) { 
    e.preventDefault();
    
    cx.stop(false, true)
});