$(document).ready(function () {
    let dis = 0

    $('div').children().css({ 'border': '1px solid black' })

    $('#btn').on({
        click: (e) => {

            if (dis == 0) {
                $('div').children().slideUp(500)

                dis++
                $('#btn').text('Descer os UL')
            } else if (dis == 1) {
                $('div').children().slideDown(500)

                dis = 0
                $('#btn').text('Esconder os UL')
            }
        }
    }
    )

    let dis2 = 0
    $('#btn2').on({
        click: () => {

            if (dis2 == 0) {
                $('ul').find('.li1:first').css({
                'background-color': 'grey',
                'padding': '10px'
                })

                dis2++
            } else if (dis2 == 1) {
                $('ul').find('.li1').css({
                'background-color': 'white',
                'padding': '0'
                })

                dis2 = 0
            }
        },
    });
});
