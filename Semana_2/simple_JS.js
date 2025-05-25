// Callbacks

function obtenerDatos(callback) {
  setTimeout(() => {
    callback("Datos obtenidos");
  }, 1000);
}

obtenerDatos((resultado) => {
  console.log(resultado);
});

// Promesas

function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Datos obtenidos con promesa");
    }, 1000);
  });
}

obtenerDatos()
  .then((resultado) => console.log(resultado))
  .catch((error) => console.error(error));


// async function

async function obtenerDatos() {
  try {
    const resultado = await new Promise((resolve) =>
      setTimeout(() => resolve("Datos con async/await"), 1000)
    );
    console.log(resultado);
  } catch (error) {
    console.error(error);
  }
}

obtenerDatos();
