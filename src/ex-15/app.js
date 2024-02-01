/*Escribir un programa que escriba en pantalla los divisores comunes de dos números dados

 
Conectar archivo javascript y css al html.
Crear el formulario.
almacenar el numero en su variable correspondiente.
comprobar si el número es menor o igual a 1.
comprobar si el número es divisible por algún número diferente de 1 y sí mismo
mostrar el resultado en el html.
*/

function findDivisors() {
    let number = document.getElementById("number").value;

    if (number <= 1) {
        document.getElementById("result").innerHTML = number + " no es primo.";
        return;
    }

    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        document.getElementById("result").innerHTML = number + " es primo.";
    } else {
        document.getElementById("result").innerHTML = number + " no es primo.";
    }

}
