$('#nome').keyup(function (e) { 
    $('#texto').html(`Você digitou: ` + $('#nome').val());
});