$('p').parent().css({'border':'1px solid red'})
$('li').parent().css({'border':'1px solid blue'})
$('ul').parent().css({'border':'1px solid green'})
$('div').parent().css({'border':'1px solid black'})
//$('body').parent().css({'border':'1px solid magenta'})

$('p').parentsUntil('div').css({'background-color':'red'})

