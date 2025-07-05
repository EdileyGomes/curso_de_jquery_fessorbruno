$(document).click(function (e) { 
    e.preventDefault();
    
    $('#resultado').html(`Você clicou no: ${e.target.id}`);

    if (e.target.id == 'resultado') {
        alert('Resultado do papai')
    }
});