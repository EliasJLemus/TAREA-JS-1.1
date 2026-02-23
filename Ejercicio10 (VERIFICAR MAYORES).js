function verificarMayoresDeEdad(listaEdades) {
  return listaEdades.every((edad) => edad >= 18); // El método 'every' nos ayuda a verificar si todos los elementos cumplen la condición de ser mayores o iguales a 18
}

const edades = [19, 25, 32, 17];

console.log(verificarMayoresDeEdad(edades));
