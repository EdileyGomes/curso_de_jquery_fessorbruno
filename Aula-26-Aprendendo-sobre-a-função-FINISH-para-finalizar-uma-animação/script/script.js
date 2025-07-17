$('#aumentar').click(function (e) { 
    e.preventDefault();


    $('.caixa').animate({width:"800px"}, 1500 )
});

$('#diminuir').click(function (e) { 
    e.preventDefault();

    $('.caixa').animate({width:"100px"}, 1500 )
});

$('#finalizar').click(function (e) { 
    e.preventDefault();
    

    $('.caixa').finish()
});

let cont = 0

$('#stop').click(function (e){
    e.preventDefault()

    $('.caixa').stop()
    if (cont === 0) {
        cont = 1
        $(".caixa").append('<br><br><br><br><br><br><p>a animação parou</p>')
    } else {
        cont = 0
        $(".caixa p").remove()
    }
})