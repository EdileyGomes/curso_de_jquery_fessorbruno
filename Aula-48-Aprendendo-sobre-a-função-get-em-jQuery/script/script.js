let num = 0

$('#btn-get').click(function (e) { 
    e.preventDefault();
    let elementos = $("p").get();
    let quantidade = elementos.length;

    console.log(elementos[num].id);

    num ++

    if (num >= quantidade) {
        num = 0;
    }
});

$('#btn-append').click(function (e) { 
    e.preventDefault();
    
    let elementos = $("p").get();
    $("#elementos").append(elementos); 
});