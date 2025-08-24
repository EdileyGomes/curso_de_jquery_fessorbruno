let p = $("p")

$("#btn-each").click(function (e) { 
    e.preventDefault();
    
    p.each( function () {
        
    })
});
let num = 0

$("#btn-cor").click(function (e) { 
    e.preventDefault();
    
    if (num == 0) {
        p.each(function () {
            $(this).addClass("cor");
        });

        num ++
    } else {
        p.each(function () {
            $(this).removeClass("cor");

        });

        num = 0
    }
});
