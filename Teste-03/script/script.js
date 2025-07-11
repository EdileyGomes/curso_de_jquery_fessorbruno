$(document).ready(function () {
    let cont = 0;
    $('#container').click(function (e) { 
        e.preventDefault();

        if (cont == 0) {
            $('#barrinha1').css({
                'transform': 'translateY(10px) rotate(45deg)',
                'transition': 'transform 0.3s'
            });
            $('#barrinha2').css({
                'opacity': '0',
                'transition': 'opacity 0.3s'
            });
            $('#barrinha3').css({
                'transform': 'translateY(-15px) rotate(-45deg)',
                'transition': 'transform 0.3s'
            });

            $('#container').css({
                'transform': 'translateX(-150px)',
                'transition': 'transform 0.3s',
            })

            $('header').html(`
                <h1>Ediley Gomes</h1>
                    <div id="menu">
                        <div id="container">
                            <div id="barrinha1"></div>
                            <div id="barrinha2"></div>
                            <div id="barrinha3"></div>
                        </div>
                    </div>`
                )
            cont = 1;
        } else {
            $('#barrinha1').css({
                'transform': 'none',
                'transition': 'transform 0.3s'
            });
            $('#barrinha2').css({
                'opacity': '1',
                'transition': 'opacity 0.3s'
            });
            $('#barrinha3').css({
                'transform': 'none',
                'transition': 'transform 0.3s'
            });
            $('#container').css({
                'transform': 'translateX(0px)',
                'transition': 'transform 0.3s'
            })
            cont = 0;
        }
    });
});