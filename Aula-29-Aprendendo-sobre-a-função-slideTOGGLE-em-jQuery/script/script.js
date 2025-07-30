const cx = $()
let cont = 0 
$('#toggle').click(function (e) { 
    e.preventDefault();
    

    if (cont == 0){
        $('.btn-menu').fadeOut(300);
        $('#menus').delay(400).slideToggle(300);

        cont ++
    } else {
        $('.btn-menu').fadeIn(300);
        $('#menus').delay(100).slideToggle();

        cont = 0 
    }
    
});