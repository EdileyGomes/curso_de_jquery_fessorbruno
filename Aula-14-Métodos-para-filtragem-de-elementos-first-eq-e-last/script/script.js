$(document).ready(function () {
    $('p').first().css({
        'border':'1px solid red',
        'background-color':'yellow'
    })
    $('p').last().css({
        'border':'1px solid red',
        'background-color':'#afa'
    })
    $('p').eq(1).css({
        'border':'1px solid red',
        'background-color':'#aaf'
    })
});