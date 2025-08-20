let itens = $('.caixa')

$('.btn-fechar').click(function (e) { 
    e.preventDefault();

    $(this).parent().toggleClass('ocultar')
});