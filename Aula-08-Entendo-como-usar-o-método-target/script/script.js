$(document).click((event) => { 
    $('#resultado').html(`Objeto clicado: ${event.target.id}`)
    if (event.target.id == 'resultado') {
        console.log('Parabenssssssss')
    }
});
