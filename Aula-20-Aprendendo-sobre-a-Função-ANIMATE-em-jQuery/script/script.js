$(document).ready(function evento() {
    $('#aumentar').click(function (e) { 
        e.preventDefault();
    
        $('#caixa').animate({width:'500px', height: '500px'})
    });

    $('#direita').click(function (e) { 
        e.preventDefault();
        
        let numH = $('#numeroH').val()
        let numW = $('#numeroW').val()

        function numero() {
            $('#caixa2').animate({height:`${numH}px`}).delay(100).animate({width:`${numW}px`},{duration:500, numero})
        }
        numero()
    });
});