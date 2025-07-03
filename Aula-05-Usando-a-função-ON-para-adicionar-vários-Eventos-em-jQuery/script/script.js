$(document).ready(()=>{
    $('.bloco').on({
        click: function(){
            $('#texto').html('Mouse clicou')
        },
        mouseenter: function() {
            $('#texto').html('Mouse entrou no quadrado!')
        },
        mouseleave: function() {
            $('#texto').html('Mouse saiu do Quadrado')
        },
        dblclick: function() {
            alert('Clicou duas vezes')
        }
    })
});
    

