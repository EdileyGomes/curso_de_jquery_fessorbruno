let cont = 0 
$('#toggle').click(function (e) { 
    e.preventDefault();
    
    
    if (cont == 0) {
        $('#menus').slideToggle(500, () => {
        $('p').delay(300).text('Mostrar');

        cont ++
    }); 
    }else {
        $('#menus').slideToggle(500)

        $('p').delay(1000).text('Ocultar');
        cont = 0
    }
    
});