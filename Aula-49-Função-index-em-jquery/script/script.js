$('p').click(function (e) { 
    e.preventDefault();
    

    alert($(e.currentTarget).index());
});