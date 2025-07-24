$(document).ready(function evento() {
    let num = $('#numero').val()

    $('#aumentar').click(function (e) { 
        e.preventDefault();
    
        $('#caixa').animate({width:'500px', height: '500px'})
    });


    $('#caixa2').toggle(1000).delay(1000).animate({width:'300px'}).animate({width:`${num}px`}).toggle(1000, evento)
});