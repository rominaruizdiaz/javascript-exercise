/*Escribir un programa que escriba en pantalla los divisores de un número dado.
 
Conectar archivo javascript y css al html.
Crear el formulario.
almacenar el numero en una variable.
buscar que numeros son divisibles por el numero y almacenarlos.
mostrar el resultado en el html.
*/

function findDivisors() {
    let number = document.getElementById("number").value;

    document.getElementById("result").innerHTML = '';

    let divisors = [];

    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
      }

      document.getElementById("result").innerHTML += `${number} es divisor de ${divisors}.<br>`;
}