$("p").first().css({'border':'10px solid red', 'background-color':'#ffa'})
$("p").last().css({'border':'10px solid red', 'background-color':'#a2f'})

let num = $('p').length; // Conta quantos <p> existem na página

function validarNumero() {
    let digitado = parseInt(prompt('Digite aqui')); // pega o valor atualizado a cada chamada e transforma em número

    if (digitado > num || digitado < 1 || isNaN(digitado)) {
        alert('Número inválido irmão! Digite Novamente');
        return validarNumero();
    }

    $('p').eq(digitado - 1).css({
        'border': '10px solid red',
        'background-color': '#f0f'
    });
}

validarNumero(); // chama a função para começar

