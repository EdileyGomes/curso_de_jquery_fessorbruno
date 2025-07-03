$('#nome').on('input', function() {
    $('#paragrafo').html(`Você digitou isso: ${$(this).val()}`);
});

$('#numero').on('input', function() {
    $('#paragrafo').html(`Você digitou isso: ${$(this).val()}`);
});

$('#endereco').on('input', function() {
    $('#paragrafo').html(`Você digitou isso: ${$(this).val()}`);
});



$('#botao').click(function (e) { 
    e.preventDefault();
    
    let nome = document.getElementById('nome')
    let numero = document.getElementById('numero')
    let endereco = document.getElementById('endereco')

    $('#section').html(`<p>Seu Nome é: ${nome.value}</p> 
                        <p>Seu número é: ${numero.value}</p>
                        <p>seu endereço é: ${endereco.value}</p>`);
});