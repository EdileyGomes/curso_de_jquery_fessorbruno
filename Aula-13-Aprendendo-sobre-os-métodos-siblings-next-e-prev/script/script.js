$(document).ready(function () {
    const children = $('span').children()
    let dis = 0

    $('button').click((e) => {
        e.preventDefault()

        dis++
        console.log(dis)
        let chilLength = children.length

        while (dis <= chilLength){ 
            children.css('border','none');
            children.eq(dis - 1).css('border','1px solid red');
            
            let idAtual = children.eq(dis - 1).attr('id');
            $('#res').text(idAtual ? `ID: ${idAtual}` : 'Sem ID');
            break;
        }
        if (dis >= chilLength) {
            dis = 0
        }
    });
});





























/*
/////////////////////////////////////////////////////////////////////////////////////
$('button').click(function (e) { 
        e.preventDefault();

        dis ++

        if (dis == 1){
            
            $('span').children().first().css({
                'border':'1px solid red'
            })
        }else if (dis == 2) {
            $('span').children().eq(1).css({
                'border':'1px solid red'
            })

            $('span').children().first().css({
                'border':'none'
            })
        }else if (dis == 3) {
            $('span').children().eq(2).css({
                'border':'1px solid red'
            })

            $('span').children().eq(1).css({
                'border':'none'
            })
        }else if (dis == 4) {
            $('span').children().eq(3).css({
                'border':'1px solid red'
            })

            $('span').children().eq(2).css({
                'border':'none'
            })
        }else if (dis >= 5) {
            $('span').children().last().css({
                'border':'1px solid red'
            })

            $('span').children().eq(3).css({
                'border':'none'
            })
        }
    if (dis >= 5) {
        dis = 0
    }
    });
    
    ///////////////////////////////////////////////////////////////////////////////////////
    let dis = 0
    const children = $('span').children()

    $('button').click((e) => {
        e.preventDefault()

        dis++
        let chilLength = children.length

        if (dis - 1 <= chilLength) {

            children.css('border', 'none')
            children.eq(dis - 1).css('border', '1px solid red')
        } else {
            dis = 0
        }
    });
    ////////////////////////////////////////////////////////////////////////////////////////////
    
    
    */
