
function sumar() {
    let num1 =parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let resultado = num1 + num2;
    alert("la suma "+num1+"+"+num2+" es "+resultado)
}

function restar() {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let resultado = num1 - num2;
  alert("la resta "+num1+"+"+num2+" es "+resultado)
  
}

function multiplicar() {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let resultado = num1 * num2;
    alert("la multiplicacion "+num1+"+"+num2+" es "+resultado)
}

function dividir() {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    if (num2 === 0) {
        document.getElementById("resultado").textContent = "Error: No se puede dividir por cero.";
    } else {
        let resultado = num1 / num2;
       alert("la divicion "+num1+"+"+num2+" es "+resultado)
    }
}
 