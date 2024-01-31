/*Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
 
Conectar archivo javascript y css al html.
Crear el formulario.
almacenar el numero en una variable.
buscar que por lo menos un numero que es divisible.
mostrar el resultado en el html.
*/

function findDivisors() {
  let number = document.getElementById("number").value;
  let divisors = [2, 3, 5, 7];
  let resultElement = document.getElementById("result");

  for (let i = 0; i < divisors.length; i++) {
    if (number % divisors[i] === 0) {
      resultElement.innerHTML = `${number} es divisible por ${divisors[i]}.`;
      return;
    }
  }

  resultElement.innerHTML = `${number} no es divisible por 2, 3, 5 ni 7.`;
}
