cont = 0
$(document).click(function (e) { 
    e.preventDefault();

    if (cont == 0) {
        $('iframe').attr('src',"https://www.youtube.com/embed/owgYF9WeKU4?si=jlotmTopqpGOx8cj")

        cont ++
    } else {
        $('iframe').attr('src',"https://www.youtube.com/embed/Homo-ORr-9o?si=azoCxCitm5MGDc6o")
        
        cont = 0
    }
});

$('#btn-vermelho').click(function (e) { 
    e.preventDefault();
    
    $('#caixa').attr('style','background-color:red')
});

$('#btn-azul').click(function (e) { 
    e.preventDefault();
    
    $('#caixa').attr('style','background-color:blue')
});

let cont2 = 0

$('#toggle').click(function (e) { 
    e.preventDefault();
    
    if (cont2 == 0 && cont == 1) {
        $('#caixa').attr('style','background-color:blue')

        cont2 ++
    } else {
        $('#caixa').attr('style','background-color:red') 

        cont2 = 0
    }
});