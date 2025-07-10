$('h2').click(function (e) { 
    e.preventDefault();
    
    

    alert(`Você clicou no ${$(this).html()}`)
});

$('#caixa').click(function (e) { 
    e.preventDefault();
    
    alert(`Você clicou no ${$(this).html()}`)
});

$('#nome').keyup(() => {
    $('#sla').text(`Você digitou: ${$('#nome').val()}`);
})