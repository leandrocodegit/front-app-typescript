let btn = document.getElementById('btn');
let input1 = document.getElementById('entrada1') as HTMLInputElement;
let input2 = document.getElementById('entrada2')as HTMLInputElement;

function calcularSoma(x:number, y: number){ 
    return Number(x) + Number(y) 
}

if(btn)
btn.addEventListener('click', () => {
    let resultado = calcularSoma(Number(input1.value), Number(input2.value))
    console.log("Soma = " + resultado);
})