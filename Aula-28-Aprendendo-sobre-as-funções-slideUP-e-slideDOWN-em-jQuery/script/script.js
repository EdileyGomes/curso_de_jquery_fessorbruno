$(document).ready(function () {
    $('#btn-cima').click(function (e) { 
        e.preventDefault();
        
        $('#menus').slideUp(1000, () => {
            alert('Olá, o menu foi fechado!');
        })
    });

    $('#btn-baixo').click(function (e) { 
        e.preventDefault();

        $('#menus').slideDown(1000)
    });
});