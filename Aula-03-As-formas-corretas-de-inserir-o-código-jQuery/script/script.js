$(document).ready(function () {
    $('#btn_clicar').click(() => { 
        
        $('#btn_recolher').css('display', 'flex').slideDown(300)
        $('#texto').html(`Olá, Mundo!`).css('display', 'flex').slideDown(300);
    });

    $('#bnt_recolher').click(function (e) { 
        e.preventDefault();
        
        $('#btn_recolher').css('display', 'flex').slideUp(300)
        $('#texto').html(`Olá, Mundo!`).css('display', 'flex').slideUp(300);
    });
});

$(document).ready(()=>{
    //$('#texto').html('<input type="text" name="" id="" placeholder="Olá Mundo">')
    $('#btn_clicar').click(function() {
        $('#btn_recolher').css('display', 'flex').slideDown(300)
        $('#texto').slideDown(300)
        $('#texto').html('<input type="text" name="" id="" placeholder="Olá Mundo">').css('display', 'flex').slideDown()
    })

    $('#btn_recolher').click( function() {
        $('#texto').slideUp(300)
        $('#btn_recolher').slideUp(300)
    })
})
