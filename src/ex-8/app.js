/*Escribe un programa que pida una frase y escriba las vocales que aparecen.
 * Conectar archivo javascript y css al html.
 * Crear el formulario.
 * * obtener la frase.
 * * convertir la frase en minusculas.
 * realizar una lista de las vocales.
 * * obtener las vocales que aparecen en la frase.
 * * * mostrar el resultado en el html.
 */

function findVocals() {
  let phrase = document.getElementById("phrase").value;

  let phraseLowerCase = phrase.toLowerCase();
  let vocals = ["a", "e", "i", "o", "u"];
  let vocalsFound = [];


  for (let vocal of vocals) {
    if (phraseLowerCase.includes(vocal)) {
      vocalsFound.push(vocal);
    }
  }

  document.getElementById("result").innerHTML = `<p>Vocales encontradas: ${vocalsFound}</p>`;

}
