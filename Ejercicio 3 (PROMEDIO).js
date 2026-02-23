function promedioPonderado(listaNotas) {
  let suma = 0; // Usamos 'let' para permitir la reasignación de la variable suma

  listaNotas.forEach((nota) => {
    suma += nota.valor * nota.peso;
  });

  return suma;
}

const notas = [
  { valor: 90, peso: 0.5 },
  { valor: 80, peso: 0.3 },
  { valor: 70, peso: 0.2 },
];

console.log("El promedio ponderado es:", promedioPonderado(notas));
