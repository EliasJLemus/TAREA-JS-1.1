const lista1 = ["manzana", "pera", "banana"];
const lista2 = ["pera", "uva", "manzana", "sandia"];

function combinarListasSinRepetir(lista1, lista2) {
  const listaCombinada = [...lista1]; // Usamos spread operator para crear una copia de lista1

  lista2.forEach((elementos) => {
    if (!listaCombinada.includes(elementos)) {
      listaCombinada.push(elementos);
    }
  });
  return listaCombinada;
}

console.log(combinarListasSinRepetir(lista1, lista2));
