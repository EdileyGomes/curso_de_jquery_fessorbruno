$(document).ready(function () {
    let cont = 0;
    $('#container').click(function (e) { 
        e.preventDefault();

        if (cont == 0) {
            $('#barrinha1').css({
                'transform': 'translateY(10px) rotate(45deg)',
                'transition': 'transform 0.3s',
                'height': '5px',
                'width': '30px'
            });
            $('#barrinha2').css({
                'opacity': '0',
                'transition': 'opacity 0.3s'
            });
            $('#barrinha3').css({
                'transform': 'translateY(-11px) rotate(-45deg)',
                'transition': 'transform 0.3s',
                'height': '5px',
                'width': '30px'
            });
            $('#container').css({
                'transform': 'translate(-180px, 5px)',
                'transition': 'transform 0.3s',
            })

            $('#menu').animate({'right':'-5px'})
            $('#menu').css('position', 'fixed');

            cont = 1;
        } else {
            $('#barrinha1').css({
                'transform': 'none',
                'transition': 'transform 0.3s',
                'height': '10px',
                'width': '50px'
            });
            $('#barrinha2').css({
                'opacity': '1',
                'transition': 'opacity 0.3s'
            });
            $('#barrinha3').css({
                'transform': 'none',
                'transition': 'transform 0.3s',
                'height': '10px',
                'width': '50px'
            });
            $('#container').css({
                'transform': 'translateX(0px)',
                'transition': 'transform 0.7s'
            })


            $('#menu').animate({'right':'-200px'})
            cont = 0;
        }
        console.log(cont)
    });
});