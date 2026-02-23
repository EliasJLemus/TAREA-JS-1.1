function cargarDatos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Datos cargados correctamente");
    }, 2000); // Simulamos una carga de datos con un retraso de 2 segundos
  });
}

cargarDatos().then((msj) => {
  console.log(msj);
});
