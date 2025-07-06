$(document).ready(function () {
    
    $('span').click(function (e) { 
        e.preventDefault();
        
        let elementoPai = $('span').parent()
        let paiId = elementoPai.attr('id')
        elementoPai.css('background-color','red')

        console.log(paiId)

        if (paiId == 'sla') {
            alert('Id correto!  ')
        }
    });

    $('h3').click(function (e) { 
        e.preventDefault();
        
        let elementoPai = $('h3').parent()
        let paiId = elementoPai.attr('id')
        elementoPai.css('background-color','green')

        console.log(paiId)

        if (paiId == 'sla') {
            alert('Id correto!  ')
        }
    });

    $('p').click(function (e) { 
        e.preventDefault();
        
        let elementoPai = $('p').parent()
        let paiId = elementoPai.attr('id')
        elementoPai.css('background-color','blue')

        console.log(paiId)

        if (paiId == 'sla') {
            alert('Id correto!  ')
        }
    });

    $('li').parent().css('border', "1px solid green")
    $('ul').parent().css('border', "1px solid red")
    $('div').parent().css('border', "1px solid violet")
    $('body').parent().css('border', "1px solid blue")
    $('html').parent().css('border', "1px solid black")


    $('#dipl-none').click(function (e) { 
        e.preventDefault();
        
        $('li').parentsUntil('div').css('display', 'none')
    });

    $('#dipl-flex').click((e) => {
        e.preventDefault()

        $('li').parentsUntil('div').css('display', 'block')
    })

    let cont = 0

    $('#dis').click(function (e) { 
        
        if (cont == 0) {
            $('#dis').text('Ligar o Display')
            $('li').parentsUntil('div').slideUp(500)

            cont ++
        } else if (cont == 1) {
            $('#dis').text('Desligar o Display')
            $('li').parentsUntil('div').slideDown(1000)

            cont = 0
        }
    });
    console.log(cont)
});