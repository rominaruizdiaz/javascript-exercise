/*
Escribe un programa que pida el nombre del usuario con un input y escriba un texto que diga “Hola <nombre-de-usuario>”
* Conectar archivo javascript y css al html.
* Crear el formulario.
* * Conseguir los datos del input al pulsar el botón.
* * * Añadir un id al input.
* * * Añadir un onclick al botón.
* * * Crear un contenedor con un id.
* * * Crear un función con el nombre del onclick.
* * * * Dentro declarar una variable del value del input.
* * Enviar un mensaje al pulsar el botón.
* * * Dentro de la misma función declarar una variable con el mensaje que queremos enviar.
* * * Después definir en que contenedor va a enviarse y el que.
*/

function displayMsg() {
    let usernameData = document.getElementById('username').value;
    let helloTo = "Hola " + usernameData;
    document.getElementById('msgContainer').innerHTML = `
        <p>${helloTo}</p>
    `;
}