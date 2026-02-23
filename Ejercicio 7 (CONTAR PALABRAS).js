function contarPalabras(listaPalabras) {
  const resultado = {}; // Creamos un objeto vacío para almacenar el conteo de palabras

  listaPalabras.forEach((palabra) => {
    if (resultado[palabra]) {
      resultado[palabra]++;
    } else {
      resultado[palabra] = 1;
    }
  });

  return resultado;
}

const palabras = ["hola", "adiós", "hola", "gracias", "hola", "gracias"];

console.log(contarPalabras(palabras));
