function obtenerUsuario(id) {
  return new Promise((resolve) => {
    setTimeout(() => { // 'setTimeout' simula una operación asíncrona, o sea que tarda un tiempo en completarse por un retraso programado de 1 segundo (1000 milisegundos)
      const nombres = {
        1: "Juan",
        2: "María",
      };

      resolve({ id, nombre: nombres[id] });
    }, 1000);
  });
}

const cargarUsuarios = async () => { // Función asíncrona para cargar usuarios,
// Ahora usaremos 'await' para esperar a que se resuelvan las promesas de 'obtenerUsuario'
  try {
    const u1 = await obtenerUsuario(1);
    const u2 = await obtenerUsuario(2);

    console.log(`Usuarios cargados: ${u1.nombre} y ${u2.nombre}`);
  } catch (e) {
    console.log("Error:", e);
  }
};

cargarUsuarios();