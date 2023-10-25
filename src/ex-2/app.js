/*
Escribe un programa que escriba en la pantalla “La suma de 3 + 5 es <resultado>”.
* Conectar archivo javascript y css al html.
* Imprimir ”La suma de 3 + 5 es <resultado>” en nuestra pantalla.
* * Crear un contenedor para el mensaje en html con un id.
* * Conseguir el resultado de la suma.
* * * Declarar variables de los numeros que queremos sumar.
* * * Declarar el resultado como la suma de las variables anteriores.
* * Mostrar el resultado como mensaje en la pantalla.
* * * Declarar variable del mensaje que queremos llamar.
* * * Declarar variable por como queremos llamarlo. (por id).
* * * Declarar una función para imprimir el titulo.
* * * Dentro del objeto con el que vamos a llamar, escribir la variable que queremos enviar.
* * * llamar a la función para que funcione automaticamente.
*/

const numberOne = 3;
const numberTwo = 5;
const result = numberOne + numberTwo;

const addMsg = "La suma de " + numberOne + " y " + numberTwo + " es " + result;
const addSection = document.getElementById("addMsg");

function addingNumbers() {
    addSection.innerHTML = `
        <h1>${addMsg}</h1>
    `
}
addingNumbers()