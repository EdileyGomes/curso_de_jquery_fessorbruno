let r,g,b

$('#btn-adicionar').click(function (e) { 
    e.preventDefault();
    
    r = Math.floor(Math.random()*255)
    g = Math.floor(Math.random()*255)
    b = Math.floor(Math.random()*255)
    a = Math.floor(Math.random()*1)

    $('#caixa').append(`<div class='subcaixa' style='background-color:rgb(${r},${g},${b})'> </div>`);
});

$('#btn-adicionar5').click(function (e) { 
    e.preventDefault();
    
    for(let i = 0; i < 5; i++) {
        r = Math.floor(Math.random()*255)
        g = Math.floor(Math.random()*255)
        b = Math.floor(Math.random()*255)
        a = Math.floor(Math.random()*1)

        $('#caixa').append(`<div class='subcaixa' style='background-color:rgb(${r},${g},${b})'> </div>`);
    }
    
});

