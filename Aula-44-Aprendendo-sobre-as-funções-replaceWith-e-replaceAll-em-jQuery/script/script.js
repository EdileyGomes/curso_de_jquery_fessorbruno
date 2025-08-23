$('#btn-replace1').click(function (e) { 
    e.preventDefault();

    $('<p>Novo Título</p>').replaceAll('.cor');
});

$('#btn-replace2').click(function (e) { 
    e.preventDefault();

    $('<div>'+$(e.currentTarget).text()+'</div>').replaceAll(e.currentTarget);
});

$('#btn-replace3').click(function (e) { 
    e.preventDefault();

    $('.cor').replaceWith('<p>Novo Título</p>');
});

$('#btn-replace4').click(function (e) { 
    e.preventDefault();

    $('.cor').replaceWith('<h4>Novo Título</h4>');
});