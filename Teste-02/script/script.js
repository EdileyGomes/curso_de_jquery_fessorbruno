$(document).ready(function () {
    let cont = 0 
    let filhosDiv = $('#div1').children().length
    $('#button1').click(function (e) { 
        e.preventDefault();
        e.stopPropagation()
        
        if (cont < filhosDiv) {
            e.stopPropagation()
            $('#div1').children().css('border','none')
            $('#div1').children().eq(cont).css('border','5px solid red')

            cont ++
            console.log(cont)
        }
        if (cont >= filhosDiv) {
            cont = 0
        }
    });
    $('#button2').click(function (e) { 
            e.preventDefault();
            e.stopPropagation()
            
            alert(`O Contador é o ${cont}, e seu texto é: ${$('#div1').children().eq(cont - 1).text()}`)
    });
});