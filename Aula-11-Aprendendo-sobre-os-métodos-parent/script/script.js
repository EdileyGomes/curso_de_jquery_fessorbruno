$('div').click(() => {
    alert('Evento disparado na Div!')
})

$('p').click((event) => {
    event.stopPropagation();
    alert('Evento disparado no p')
})

$('span').click((event) => {
    event.stopPropagation();
    alert('Evento disparado no Span')
})