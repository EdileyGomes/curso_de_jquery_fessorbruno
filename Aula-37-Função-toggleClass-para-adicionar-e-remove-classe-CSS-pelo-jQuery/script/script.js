let alerta = setInterval(() => {
    $("#caixa").toggleClass('alerta')
}, 1000)

$('#sla').click(function (e) { 
    e.preventDefault();
    
    $('#caixa2').toggleClass('alerta');
});