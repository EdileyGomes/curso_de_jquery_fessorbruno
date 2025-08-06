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