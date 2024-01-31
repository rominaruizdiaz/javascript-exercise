/*Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales.
 
Conectar archivo javascript y css al html.
Crear el formulario.
obtener la frase.
convertir la frase en minusculas.
realizar una lista de las vocales.
obtener cuantas vocales aparecen en la frase.
mostrar el resultado en el html.
*/

function findVocals() {
  let phrase = document.getElementById("phrase").value;

  let phraseLowerCase = phrase.toLowerCase();
  let vocals = {
    "a": 0,
    "e": 0,
    "i": 0,
    "o": 0,
    "u": 0,
  };

  for (let vocal of phraseLowerCase) {
    if (vocal in vocals) {
      vocals[vocal]++;
    }
  }

  let result = '';

  for (let vocal in vocals) {
    result += `<p>Vocales '${vocal}' encontradas: ${vocals[vocal]}</p>`;
  }

  document.getElementById("result").innerHTML = result;
}
