/*Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
 * Conectar archivo javascript y css al html.
 * Crear el formulario.
 * Declarar variables.
 * * comparar los resultados.
 * * mostrar el resultado en el html.
 */

function compareNumbers() {
  let numb1 = document.getElementById("numbOne").value;
  let numb2 = document.getElementById("numbTwo").value;

  let biggerNumb;

  if (numb1 > numb2) {
    biggerNumb = numb1;

    document.getElementById("result").innerHTML = `
    <p> Entre ${numb1} y ${numb2} el numero mas mayor es ${biggerNumb}. </p>
    `;
  } else if (numb2 > numb1) {
    biggerNumb = numb2;

    document.getElementById("result").innerHTML = `
    <p> Entre ${numb1} y ${numb2} el numero mas mayor es ${biggerNumb}. </p>
    `;
  } else {
    biggerNumb = "Los números son iguales";

    document.getElementById("result").innerHTML = `
    <p>${biggerNumb}. </p>
    `;
  }
}
