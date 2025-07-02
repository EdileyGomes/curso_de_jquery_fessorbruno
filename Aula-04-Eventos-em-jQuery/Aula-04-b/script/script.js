$(document).ready(()=>{
    $('#bloco').click(function() { 
        $('#texto').html('Olá, Mundo!')
    }); 
    $('#bloco').mouseenter(function() { 
        $('#texto').html('Mouse sobre o quadrado')
    });
    $('#bloco').mouseleave(function() { 
        $('#texto').html('Mouse saiu')
    });
    $('#bloco').mousemove(function() { 
        $('#texto').html('Mouse moveu no quadrado')  
    });
});
