$('#aumentar').click(function (e) { 
    e.preventDefault();


    $('.caixa').animate({width:"800px"},{duration: 1500,complete: () => {$('#info').text($('.caixa').queue().length)}})
    
});

$('#diminuir').click(function (e) { 
    e.preventDefault();

    $('.caixa').animate({width:"100px"}, {duration: 1500, complete: () => {$('#info').text($('.caixa').queue().length)}})
    
});

$('#finalizar').click(function (e) { 
    e.preventDefault();
    

    $('.caixa').finish()
    $('#info').text('')
});
