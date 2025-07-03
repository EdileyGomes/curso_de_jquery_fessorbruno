$('#btn-somarjq').click(function (e) { 
    e.preventDefault();
    
    let v1 = Number($('#v1').val())
    let v2 = Number($('#v2').val())
    let res = Number($('#red').val())

    let soma = v1 + v2

    $('#res').val(soma);
});