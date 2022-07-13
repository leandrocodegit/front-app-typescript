let button = document.getElementById('btn');
let entrada1 = document.getElementById('entrada1');
let entrada2 = document.getElementById('entrada2');

function soma(x, y){ 
    return Number(x) + Number(y) 
}

button.addEventListener('click', () => {
    let resultado = soma(entrada1.value, entrada2.value)
    console.log("Soma = " + resultado);
})