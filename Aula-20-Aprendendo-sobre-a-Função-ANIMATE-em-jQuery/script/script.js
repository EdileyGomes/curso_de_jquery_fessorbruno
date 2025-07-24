$(document).ready(function evento() {
    let numH = $('#numeroH').val()
    let numW = $('#numeroH').val()

    $('#aumentar').click(function (e) { 
        e.preventDefault();
    
        $('#caixa').animate({width:'500px', height: '500px'})
    });

    function animacao() {
        $('#caixa2').animate({height:`${numH}px`}).delay(1000).animate({width:`${numW}px`},{duration:500, animacao})
    }
    animacao()
});