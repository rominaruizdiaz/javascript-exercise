/*Escribe un programa que pida dos números y escriba “La suma de <numero-uno> con <numero-dos> es <resultado>”.
 * Conectar archivo javascript y css al html.
 * Crear el formulario.
 * Declarar variables.
 * * sumar las dos variables.
 * * mostrar el resultado en el html.
 */

function calcSum() {
  let num1 = document.getElementById("numOne").value;
  let num2 = document.getElementById("numTwo").value;
  let result = Number(num1) + Number(num2);
  document.getElementById("sum").innerHTML = `
        <p>La suma de ${num1} con ${num2} es ${result}.</p>
    `;
}
