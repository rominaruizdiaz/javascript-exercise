/*Escribir un programa que escriba en pantalla los divisores comunes de dos números dados

 
Conectar archivo javascript y css al html.
Crear el formulario.
almacenar los numeros en su variable correspondiente.
buscar que numeros son divisibles por los dos numeros y almacenarlos.
mostrar el resultado en el html.
*/

function findDivisors() {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    document.getElementById("result").innerHTML = '';

    let commonDivisors = [];

    for (let i = 1; i <= Math.min(number1, number2); i++) {
        if (number1 % i === 0 && number2 % i === 0) {
            commonDivisors.push(i);
        }
    }

    if (commonDivisors.length > 0) {
        document.getElementById("result").innerHTML = "Divisores comunes: " + commonDivisors.join(', ');
    } else {
        document.getElementById("result").innerHTML = "No hay divisores comunes entre los dos números.";
    }
}