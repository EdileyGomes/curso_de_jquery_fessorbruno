$(document).ready(function () {
    let expressao = '';

    $('#calculadora button').click(function(e) {
        e.preventDefault();

        let valor = $(this).text(); // pega o texto do botão

        // Quando clicar em "="
        if (valor === '=') {
            try {
                let resultado = eval(expressao.replace(/x/g, '*')); // troca "x" por "*"
                $('#valor').val(resultado); // mostra o resultado
                expressao = resultado.toString(); // continua a partir do resultado
            } catch {
                $('#valor').val('Erro');
                expressao = '';
            }
            return;
        }

        // Quando clicar em "C" (limpar) — você pode criar esse botão depois
        if (valor === 'C') {
            expressao = '';
            $('#valor').val('');
            return;
        }

        // Caso contrário, é número ou operador
        expressao += valor;
        $('#valor').val(expressao);
    });
});