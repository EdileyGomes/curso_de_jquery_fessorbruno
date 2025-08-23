$('#btn-rolar-left').click(function (e) { 
    e.preventDefault();

    $("#texto").scrollLeft(15)
});

$('#btn-rolar-top').click(function (e) { 
    e.preventDefault();
    

    $('#texto').animate({ scrollTop: 75 }, 400);
});