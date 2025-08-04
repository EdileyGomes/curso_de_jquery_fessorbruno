$(document).ready(function () {
    let expressao = '';

    $('#calculadora button').click(function(e) {
        e.preventDefault();

        let valor = $(this).text();

        if (valor === '=') {
            try {
                let resultado = math.evaluate(expressao.replace(/x/g, '*'));
                $('#valo1r').val(resultado);
                expressao = resultado.toString(); // atualiza a expressão com o resultado
            } catch (err) {
                $('#valor').val('Erro');
                expressao = '';
            }
            return; // IMPORTANTE: evita adicionar "=" na expressão
        }

        if (valor === 'C') {
            expressao = '';
            $('#valor').val('');
            return;
        }

        expressao += valor;
        $('#valor').val(expressao);
    });
});