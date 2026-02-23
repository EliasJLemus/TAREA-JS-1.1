function eliminarDuplicados(lista, propiedad) {
  const resultado = []; // Creamos un nuevo array para almacenar los elementos únicos

  lista.forEach((elemento) => {
    const existe = resultado.some( // 'some' devuelve true si al menos un elemento del array cumple la condición
      (item) => item[propiedad] === elemento[propiedad],
    );

    if (!existe) {
      resultado.push(elemento); // 'push' agrega el elemento al array resultado si no existe un elemento con la misma propiedad
    }
  });

  return resultado;
}

const elementos = [
  { id: 1, nombre: "A" },
  { id: 2, nombre: "B" },
  { id: 1, nombre: "A" },
];

console.log(eliminarDuplicados(elementos, "id"));
