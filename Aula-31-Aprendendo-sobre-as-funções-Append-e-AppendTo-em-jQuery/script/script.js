let r,g,b

$('#btn-adicionar').click(function (e) { 
    e.preventDefault();
    
    r = Math.floor(Math.random()*255)
    g = Math.floor(Math.random()*255)
    b = Math.floor(Math.random()*255)
    a = Number(Math.random().toFixed(3));

    $('#caixa').append(`<div class='subcaixa' style='background-color:rgba(${r},${g},${b},${a})'> </div>`);
});

$('#btn-adicionar5').click(function (e) { 
    e.preventDefault();
    
    for(let i = 0; i < 5; i++) {
        r = Math.floor(Math.random()*255)
        g = Math.floor(Math.random()*255)
        b = Math.floor(Math.random()*255)
        a = Number(Math.random().toFixed(3));

        $('#caixa').append(`<div class='subcaixa' style='background-color:rgba(${r},${g},${b},${a})'> </div>`);
    }
    
});

