var btn = document.getElementById('btn');
var input1 = document.getElementById('entrada1');
var input2 = document.getElementById('entrada2');
function calcularSoma(x, y) {
    return Number(x) + Number(y);
}
if (btn)
    btn.addEventListener('click', function () {
        var resultado = calcularSoma(Number(input1.value), Number(input2.value));
        console.log("Soma = " + resultado);
    });
