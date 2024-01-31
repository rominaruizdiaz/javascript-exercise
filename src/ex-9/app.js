/*Escribe un programa que pida una frase y escriba cuantas vocales hay en la frase.
 * Conectar archivo javascript y css al html.
 * Crear el formulario.
 * * obtener la frase.
 * * convertir la frase en minusculas.
 * realizar una lista de las vocales.
 * * obtener cuantas vocales aparecen en la frase.
 * * * mostrar el resultado en el html.
 */

function findVocals() {
  let phrase = document.getElementById("phrase").value;

  let phraseLowerCase = phrase.toLowerCase();
  let vocals = ["a", "e", "i", "o", "u"];
  let vocalCounter = 0;

  for (let i = 0; i < phraseLowerCase.length; i++) {
    if (vocals.includes(phraseLowerCase[i])) {
      vocalCounter++;
    }
  }

  document.getElementById("result").innerHTML = `
    <p>hay ${vocalCounter} vocales en esta frase. </p>
    `;
}
