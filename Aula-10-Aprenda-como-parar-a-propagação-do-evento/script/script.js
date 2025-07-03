$('div').click(function (e) { 
    e.preventDefault();
    e.stopPropagation();
    
    $('#resultado').html(`Você clicou no <strong>"DIV"</strong>`);
});

$('p').click(function (e) { 
    e.preventDefault();
    e.stopPropagation();
    
    $('#resultado').html(`Você clicou no <strong>"SPAN"</strong>`);
});;

$('span').click(function (e) { 
    e.preventDefault();
    e.stopPropagation();
    
    $('#resultado').html(`Você clicou no <strong>"P"</strong>`);
});

