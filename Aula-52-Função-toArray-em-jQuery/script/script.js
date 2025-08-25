let p = []
let h4 = []

let num = 0 

$('#p-para-caixa2').click(function (e) { 
    e.preventDefault();

    p = $('p').toArray()

    $('#caixa2').append(p);

    num ++
});

$('#h4-para-caixa2').click(function (e) { 
    e.preventDefault();

    h4 = $('h4').toArray()

    $('#caixa2').append(h4);
    console.log(p, h4)

    num ++

    if (num == 2) {

        setTimeout(function() {
            $(p).appendTo('#caixa');
            $(h4).appendTo('#caixa');
        }, 5000);

        num = 0
    }
});