$(document).on({ 
    click: (event) => {$('#resultado').html(`${event.type}: ${event.which}`)},
    keydown: (event) => {
        $('#resultado').html(`${event.type}: ${event.which}`);
        if (event.which == 13) {
            alert('Foi pressionado o ENTER')
        }

    } 
});