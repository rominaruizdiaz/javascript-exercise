/*Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a.
 * Conectar archivo javascript y css al html.
 * Crear el formulario.
 * * obtener la frase.
 * * convertir la frase en minusculas.
 * * obtener cuantas "a" aparecen en la frase.
 * * * mostrar el resultado en el html.
 */

function findVocalA() {
  let phrase = document.getElementById("phrase").value;

  let phraseLowerCase = phrase.toLowerCase();
  let vocal = "a";
  let vocalCounter = 0;

  for (let i = 0; i < phraseLowerCase.length; i++) {
    if (phraseLowerCase[i] === vocal) {
      vocalCounter++;
    }
  }

  document.getElementById("result").innerHTML = `
    <p>hay ${vocalCounter} "a" en esta frase. </p>
    `;
}
