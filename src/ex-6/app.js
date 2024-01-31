/*Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres..
 * Conectar archivo javascript y css al html.
 * Crear el formulario.
 * * obtener los numeros.
 * * comparar los numeros.
 * * obtener el numero mas alto de los tres.
 * * * mostrar el resultado en el html.
 */

function compareNumbers() {
  let numb1 = document.getElementById("numbOne").value;
  let numb2 = document.getElementById("numbTwo").value;
  let numb3 = document.getElementById("numbThree").value;

  let biggerNumber = Math.max(numb1, numb2, numb3);

  document.getElementById("result").innerHTML = `
    <p>${biggerNumber}. </p>
    `;
}
