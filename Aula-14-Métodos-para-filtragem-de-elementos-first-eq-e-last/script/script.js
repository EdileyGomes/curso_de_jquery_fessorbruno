$(document).ready(function () {
    $('p').first().css('border','5px solid violet')
    $('p').last().css('border','5px solid aquamarine')

    $('h3').first().css('border','5px solid violet')
    $('h3').last().css('border','5px solid aquamarine')

    $('p').eq(2).css('border','10px solid red')
    $('h3').eq(2).css('border','10px solid red')
});