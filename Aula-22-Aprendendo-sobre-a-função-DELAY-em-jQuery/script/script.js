function sla() {
    $("p").text("Eu Sou Ediley Gomes!")
}

$('#btn-aumentar').click(function (e) { 
    e.preventDefault();
    
    $('#caixa').animate({width:'400px', height:'400px'}).delay(200).animate({width:"200px", height:"200px"},1000, sla)
});

$('#btn-diminuir').click(function (e) { 
    e.preventDefault();
    
    $('#caixa').animate({width:'200px', height:'200px'})
});

$('#btn-mostrar').click(function (e) { 
    e.preventDefault();
    
    $('#caixa').delay(1000).fadeToggle()
});

