let cx = $("#caixa1");

$("#info").html(
    "width:" + cx.width() + '<br>'+
    "height:" + cx.height() + '<br>' +
    "InnerWidth:" + cx.innerWidth() + '<br>' +
    "InnerHeight:" + cx.innerHeight() + '<br>' +
    "OuterWidth:" + cx.outerWidth() + '<br>' +
    "OuterHeight:" + cx.outerHeight() + '<br>' +
    "OuterWidth(true):" + cx.outerWidth(true) + '<br>' +
    "OuterHeight(true):" + cx.outerHeight(true)
)