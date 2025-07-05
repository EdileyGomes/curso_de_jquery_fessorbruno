$(document).ready(function () {
    $('div').click(function (e) { 
        e.preventDefault();
        

        alert('Evento disparado no div')
    });
    $('p').click(function (e) { 
        e.preventDefault();
        e.stopPropagation()

        alert('Evento disparado no p')
    });
    $('span').click(function (event) { 
        event.preventDefault();
        event.stopPropagation()

        alert('Evento disparado no span')
    });
});

