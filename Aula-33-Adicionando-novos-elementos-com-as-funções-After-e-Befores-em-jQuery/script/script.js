let r,g,b
let num = 1
$('#btn-adicionarantes').click(function (e) { 
    e.preventDefault();
    
    r = Math.floor(Math.random()*255)
    g = Math.floor(Math.random()*255)
    b = Math.floor(Math.random()*255)
    a = Number(Math.random().toFixed(3));

    $('#caixa').before(`<div class='subcaixa' style='background-color:rgba(${r},${g},${b},${a})'>${num}</div>`);

    num ++
});

$('#btn-adicionardepois').click(function (e) { 
    e.preventDefault();
    for(let i = 0; i < 5; i++) {
        r = Math.floor(Math.random()*255)
        g = Math.floor(Math.random()*255)
        b = Math.floor(Math.random()*255)
        a = Number(Math.random().toFixed(3));

        //$('#caixa').prependTo(`<div class='subcaixa' style='background-color:rgba(${r},${g},${b},${a})'>$ {num} </div>`);//
        $('#caixa').after(`<div class='subcaixa' style='background-color:rgba(${r},${g},${b},${a})'>${num} </div>`);

        num ++
    }    
})

$('#btn-textoantes').click(function (e) { 
    e.preventDefault();

    $('#caixa2').prepend(`Curso de Jquery antes`);

    num ++
});

$('#btn-textodepois').click(function (e) { 
    e.preventDefault();

    $('#caixa2').append(`Curso de jQuery depois`);
})

