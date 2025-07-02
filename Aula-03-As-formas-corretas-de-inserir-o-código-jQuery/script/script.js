$(document).ready(()=>{
    //$('#texto').html('<input type="text" name="" id="" placeholder="Olá Mundo">')
    $('#btn_clicar').click(function() {
        $('#texto').slideDown(300)
        $('#texto').html('<input type="text" name="" id="" placeholder="Olá Mundo">').css('display', 'flex').slideDown()
    })
})
