const cx = $('.caixa')
$('#aumentar').click(function (e) { 
    e.preventDefault();
    
    $(".caixa").animate({width:"500px"},{duration:1000, complete: () => {
        $('#info').text(cx.queue("fx").length);
    }})
    
});

$('#diminuir').click(function (e) { 
    e.preventDefault();
    
    $(".caixa").animate({width:"100px"},{duration:1000, complete: () => {
        $('#info').text(cx.queue("fx").length);
    }})
});

$('#finalizar').click(function (e) { 
    e.preventDefault();
    
    $('.caixa').finish() 
});

