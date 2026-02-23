function filtrarDisponibles(productos, categoriaBuscada) {
  return productos.filter(
    // Filtramos los productos que pertenecen a la categoría buscada y tienen stock disponible
    (producto) => producto.categoria === categoriaBuscada && producto.stock > 0,
  );
}

const productos = [
  { nombre: "Camisa", categoria: "ropa", stock: 10 },
  { nombre: "Pantalón", categoria: "ropa", stock: 0 },
  { nombre: "Televisor", categoria: "electrónica", stock: 5 },
];

console.log(filtrarDisponibles(productos, "ropa"));
