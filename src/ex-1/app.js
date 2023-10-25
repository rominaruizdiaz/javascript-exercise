/*
Escribe un programa que escriba en la pantalla un texto de tipo <h1> que diga “Hello Javascript”.
* Conectar archivo javascript y css al html.
* Imprimir "Hello Javascript!" en nuestra pantalla.
* * Crear un contenedor para el mensaje en html con un id.
* * Declarar variable del mensaje que queremos enviar.
* * Declarar variable por como queremos llamarlo. (por id).
* * Declarar una función para imprimir el titulo.
* * Dentro del objeto con el que vamos a llamar, escribir la variable que queremos enviar.
* * llamar a la función para que funcione.
*/

const title = "Hello Javascript!"
const titleSection = document.getElementById('title');

function printTitle() {
    titleSection.innerHTML = `
        <h1>${title}</h1>
    `
}
printTitle()
