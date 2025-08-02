let r,g,b
let num = 0 
$('#btn-adicionar').click(function (e) { 
    e.preventDefault();
    
    r = Math.floor(Math.random()*255)
    g = Math.floor(Math.random()*255)
    b = Math.floor(Math.random()*255)
    a = Number(Math.random().toFixed(3));

    $('#caixa').prepend(`<div class='subcaixa' style='background-color:rgba(${r},${g},${b},${a})'>${num}</div>`);

    num ++
});
let num2 = 0 
$('#btn-adicionar5').click(function (e) { 
    e.preventDefault();
    for(let i = 0; i < 5; i++) {
        r = Math.floor(Math.random()*255)
        g = Math.floor(Math.random()*255)
        b = Math.floor(Math.random()*255)
        a = Number(Math.random().toFixed(3));

        //$('#caixa').prependTo(`<div class='subcaixa' style='background-color:rgba(${r},${g},${b},${a})'>$ {num} </div>`);//
        $(`<div class='subcaixa' style='background-color:rgba(${r},${g},${b},${a})'>${num} </div>`).prependTo('#caixa');

        num ++
    }    
})