let r,g,b
let num = 1
$('#btn-adicionar').click(function (e) { 
    e.preventDefault();
    
    r = Math.floor(Math.random()*255)
    g = Math.floor(Math.random()*255)
    b = Math.floor(Math.random()*255)
    a = Number(Math.random().toFixed(3));

    $('#caixa').append(`<div id='d${num}' class='subcaixa' style='background-color:rgba(${r},${g},${b},${a})'>${num}</div>`);

    num ++
});


$('#btn-remover').click(function (e) { 
    e.preventDefault();

    let num2 = $('#caixa').children().length

    if (num = num2) {
        num2 = 0

        $("#d"+(num2 ++)).remove()

        num ++
    }

    console.log(num2)
});

$('#btn-removerconteudo').click(function (e) { 
    e.preventDefault();
    
    $('#caixa').empty()

    $('#caixa').append(`<div id='d${num = 0}' class='subcaixa' style='background-color:rgba(${r},${g},${b},${a})'>${num = 0}</div>`);
    num = 1
});