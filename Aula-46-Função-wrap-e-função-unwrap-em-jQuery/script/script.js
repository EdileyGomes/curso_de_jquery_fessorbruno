let elementos = $("p")

$("#btn-pacote").click(function (e) { 
    e.preventDefault();

    if (elementos.parent().is('div')) {
        elementos.unwrap()
    } else {
        elementos.wrap("<div class='pacote'></div>")
    }
});

$('#btn-empacotar-tudo').click(function (e) { 
    e.preventDefault();
    

    elementos.wrapAll("<div class='pacote'></div>");
});

$('#btn-empacotar-depois').click(function (e) { 
    e.preventDefault();
    

    elementos.wrapInner("<div class='pacote'></div>");
});

$('#btn-empacotar-tudo').on('dblclick', function () {
    
    elementos.unwrap()
});