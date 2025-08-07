$('#btn-clonar').click(function (e) { 
    e.preventDefault();
    
    $("#caixa").clone().appendTo('#caixa1');

    let num = $('#caixa1').children().length; 
    
    console.log(num);})