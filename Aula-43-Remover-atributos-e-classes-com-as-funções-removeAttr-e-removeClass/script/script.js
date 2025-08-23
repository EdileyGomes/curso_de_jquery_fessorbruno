$('#btn-removerAtributo').click(function (e) { 
    e.preventDefault();

    $("#caixa").removeAttr('style');
});



$('#btn-removerClasse').click(function (e) { 
    e.preventDefault();

    console.log("Classe removida");

    $("#caixa").removeClass('borda');
});


$('#btn-adicionarClasse').click(function (e) { 
    e.preventDefault();

    console.log("Classe adicionada");

    $("#caixa").addClass('borda');
});







// Pega a posição atual da caixa
let caixaPos = $("#caixa").position();
let caixaTop = caixaPos.top;
let caixaLeft = caixaPos.left;

// Pega os valores dos sliders
let sliderTop = $("#top").val();
let sliderLeft = $("#left").val();

console.log("Posição da caixa:", caixaTop, caixaLeft);
console.log("Valores dos sliders:", sliderTop, sliderLeft);

$("#top, #left").change(function () {
    $('#caixa').css({
        top: 1 + "px",
        left: 1 + "px"
    });

    let newTop = $("#top").val();
    let newLeft = $("#left").val();


    

    $("#caixa").css({
        top: newTop + "px",
        left: newLeft + "px"
    });
    console.log("Posição da caixa:", caixaTop, newTop);
    console.log("Valores dos sliders:", sliderTop, newLeft);
});