$(document).ready(function () {
    $('p').filter('.borda').css({'color':'red'})
    $('p').not('.borda').css({'color':'white','background-color':'red','padding':'10px'})
});

$('button').on({
    click: (e) => {
        e.preventDefault()

        $(document).css({'display':'none'})
    },
    mouseenter: () => {
        $(document).filter('p').css()
    }
})