$('h2').click(function (e) { 
    e.preventDefault();
    
    alert('Texto:' + $(this).text())
});

$('#nome').keyup(function() {

    $('#sla').text(`Você digitou: ${$(this).val()}`)
})

$('button').click( function() {


    $('p').html('<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam pariatur, assumenda dolores natus nisi deserunt labore, nihil repellat aliquid enim, quos voluptatum cum? Velit expedita odio possimus provident distinctio at?</p>'+
    '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, tenetur animi minus nam, magni non ipsa ipsum molestias laborum harum facere odio ut quisquam nemo! Culpa illum vitae porro pariatur.</p>');
})