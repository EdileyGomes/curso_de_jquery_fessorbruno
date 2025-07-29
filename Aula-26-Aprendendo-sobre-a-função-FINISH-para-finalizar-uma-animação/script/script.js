$('#aumentar').click(function (e) { 
    e.preventDefault();
    
    $(".caixa").animate({width:"500px"},{duration:1000})
});

$('#diminuir').click(function (e) { 
    e.preventDefault();
    
    $(".caixa").animate({width:"100px"},{duration:1000})
});

$('#finalizar').click(function (e) { 
    e.preventDefault();
    
    $('.caixa').finish() 
});

function sla() {
    alert("Olá?")
}

sla()

$('#stop').click(function (e) { 
    e.preventDefault();
    
    $('.caixa').stop()  
});