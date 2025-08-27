let cx = $("#caixa1");

$("#btn1").click(function (e) { 
    e.preventDefault();

    cx.animate({
        width: 300,
        height: 650
    }, {duration: 1000, easing: "swing"});
});