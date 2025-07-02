$(document).ready(()=>{
    $('#nome').keyup(function (e) { 
        $('#texto').html(`${nome.value}`)
    });
});
