$('#aumentar').click(function (e) { 
    e.preventDefault();


    $('.caixa').animate({width:"800px"}, 1500 )
    $('#info').text($('.caixa').queue().length)
});

$('#diminuir').click(function (e) { 
    e.preventDefault();

    $('.caixa').animate({width:"100px"}, 1500 )
    $('#info').text($('.caixa').queue().)
});

$('#finalizar').click(function (e) { 
    e.preventDefault();
    

    $('.caixa').finish()
});
