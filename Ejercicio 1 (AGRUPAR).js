function agruparPorPropiedad(lista, propiedad) {
  const resultado = {};

  lista.forEach((elemento) => {
    // Iteramos sobre cada elemento de la lista
    const clave = elemento[propiedad];

    if (!resultado[clave]) {
      resultado[clave] = [];
    }

    resultado[clave].push(elemento); // Agregamos el elemento al grupo correspondiente en el resultado
  });

  return resultado;
}

// Prueba
const datos = [
  { categoria: "fruta", nombre: "manzana" },
  { categoria: "verdura", nombre: "zanahoria" },
  { categoria: "fruta", nombre: "banana" },
  { categoria: "verdura", nombre: "lechuga" },
];

console.log(agruparPorPropiedad(datos, "categoria"));
