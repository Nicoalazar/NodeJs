/*
// CLASE 2
console.log("Hola mundo desde node.js");

// CLASE 3
const precios = [4, 8, 15, 16, 23, 42, 6, 9, 11, 21];

let preciosConIva = precios.map((precio) => precio * 1.21);

for (let i = 0; i < preciosConIva.length; i++) {
     console.log(`El precio es: ${preciosConIva[i]}.- IVA incluido`);
}

// CLASE 4
const autos = [
    { marca: 'Ford', modelo: 'Focus', anio: 2012, color: 'azul' },
    { marca: 'Chevrolet', modelo: 'Camaro', anio: 2015, color: 'rojo' },
    { marca: 'Toyota', modelo: 'Corolla', anio: 2010, color: 'blanco' },
    { marca: 'Honda', modelo: 'Civic', anio: 2016, color: 'negro' },
    { marca: 'Nissan', modelo: 'Sentra', anio: 2014, color: 'gris' },
    { marca: 'Mazda', modelo: '3', anio: 2017, color: 'plata' },
    { marca: 'Hyundai', modelo: 'Elantra', anio: 2018, color: 'verde' },
    { marca: 'Kia', modelo: 'Forte', anio: 2019, color: 'amarillo' },
    { marca: 'Volkswagen', modelo: 'Golf', anio: 2013, color: 'naranja' },
    { marca: 'Subaru', modelo: 'Impreza', anio: 2021, color: 'azul marino' }
];

const autosNuevos = autos.filter((auto) => auto.anio > 2018);
autosNuevos.forEach((auto) => console.log(auto));


const colores = autos.map(({color}) => color);
console.log(colores);

function contarPorColor(color) {
    const cantidad = autos.filter((auto) => auto.color === color).length;
    console.log(`Hay ${cantidad} automóviles con el color ${color}`);
}

contarPorColor('azul');

//CLASE 5
// Contruimos la base del proyecto con npm init -y
// index.js
function handleCommand() {
  // process.argv[0] es la ruta a Node.js
  // process.argv[1] es la ruta al archivo actual
  // process.argv[2] y siguientes son los argumentos proporcionados
  const command = process.argv[2];
  const params = process.argv[3];

  switch (command) {
    case 'GET':
      console.log('Toma un dato');
      break;
    case 'POST':
      console.log(`Recibimos ${params} satisfactoriamente`);
      break;
    case 'PUT':
      console.log(`Modificamos el item con id: ${params} satisfactoriamente`);
      break;
    case 'DELETE':
      console.log(`El item con id: ${params} se eliminó con exito`);
      break;
    default:
      console.log('Comando no reconocido. Usa GET, POST, PUT o DELETE');
  }
}

handleCommand();
*/
// CLASE 6
let personajes = {};
let personajesFiltrados = [];
const cantidadPersonajes = 5;
const url = 'https://rickandmortyapi.com/api/character';
fetch(url)
    .then((response) => response.json())
    .then((data) => {personajes = data.results;
        for (let i = 0; i < cantidadPersonajes; i++) {
            personajesFiltrados.push(personajes[i].name);
        }
        console.log(personajesFiltrados);
    })
    .catch((error) => console.error(error))
    .finally(() => console.log('Primer proceso finalizado'));
personajes2 = {};
personajesFiltrados2 = [];
async function obtenerPersonajes() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        personajes2 = data.results;
        for (let i = 0; i < cantidadPersonajes; i++) {
            personajesFiltrados2.push(personajes2[i].name);
        }
        console.log(personajesFiltrados2);
    } catch (error) {
        console.error(error);
    } finally {
        console.log('Segundo proceso finalizado');
    }
}
obtenerPersonajes();