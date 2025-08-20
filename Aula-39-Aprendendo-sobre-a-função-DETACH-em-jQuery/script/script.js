let itens = $(".item")
let i = 0 

console.log(itens)

$('#btn-mudar').click(function (e) { 
    e.preventDefault();
    
    let item = $(itens[i]).detach()

    i++
    let num = $("#caixa2 .item").length;
    $("#caixa2").append(item)
    
});

$('#btn-reset').click(function (e) { 
    e.preventDefault();

    for (let j = 0; j < itens.length; j++) {
        $("#caixa1").append($(itens[j]));
    }

    i = 0
});