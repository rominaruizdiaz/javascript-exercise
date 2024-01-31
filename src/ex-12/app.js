/*Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
 
Conectar archivo javascript y css al html.
Crear el formulario.
almacenar el numero en una variable.
buscar que numeros son divisibles por el numero y almacenarlos.
mostrar el resultado en el html.
*/

function findDivisors() {
  let number = parseInt(document.getElementById("number").value);

  let divisors = [2, 3, 5, 7];
  let yesDivisors = [];

  
  for (let divisor of divisors) {
    if (number % divisor === 0) {
      yesDivisors.push(divisor)
    }
  }

  if (yesDivisors.length > 0) {
    result.innerHTML += `<p>${number} es divisible por: ${yesDivisors.join(', ')}.</p>`;
  } else {
    result.innerHTML += `<p>${number} no es divisible por ningún número en la lista.</p>`;
  }
}
