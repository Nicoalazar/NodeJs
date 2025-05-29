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

// CLASE 6
let personajes = {};
let personajesFiltrados = [];
const cantidadPersonajes = 1;
fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => personajes = data.results)
    .catch((error) => console.error(error))
    .finally(() => {
        for (let i = 0; i < cantidadPersonajes; i++) {
            personajesFiltrados.push(personajes[i].name);
        }
        console.log(personajesFiltrados);
    });
personajes2 = {};
personajesFiltrados2 = [];
async function obtenerPersonajes() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        personajes2 = data.results;
        for (let i = 0; i < cantidadPersonajes; i++) {
            personajesFiltrados2.push(personajes2[i].name);
        }
        console.log(personajesFiltrados2);
    } catch (error) {
        console.error(error);
    }
}
obtenerPersonajes();
*/
const BASE_URL = 'https://fakestoreapi.com/';
/**
 * Realiza una peticion HTTP al endpoint especificado
 * @param {string} method - Metodo HTTP (GET, POST, PUT, DELETE)
 * @param {string} endpoint - Endpoint al que se realizar  la peticion
 * @param {object} [productData] - Objeto con los datos a enviar en el body de la peticion
 * @version 1.0
 */
async function apiRest(method,endpoint,productData = null) {
  try {
    const config = {
      method: method,
    };
    if(productData) {
      config.headers = {
        'Content-Type': 'application/json'
      };
      config.body = JSON.stringify(productData);
    };

    const response = await fetch (`${BASE_URL}${endpoint}`,config);
    
    if(!response.ok){
      throw new Error(`Status: ${response.status}`)
    }

    const data = await response.json();
    console.log(data);
  
  } catch (error) {
      console.error('Error en la petición.', error.message);
    }
}

/**
 * Parsea los argumentos de la linea de comandos
 * @returns {object} Un objeto con las propiedades method, endpoint y additionalArgs
 * @version 1.0
 */
const parseArguments = () => ({
  method: process.argv[2],
  endpoint: process.argv[3],
  additionalArgs: process.argv.slice(4),
});

/**
 * Crea un objeto de datos del producto a partir de los argumentos proporcionados.
 * 
 * @param {array} args - Un array que contiene los argumentos para crear el producto.
 * @returns {object|null} Un objeto con las propiedades title, price y category, 
 *                        o null si los argumentos son insuficientes.
 * @version 1.0
 */

const createProductData = (args) => {
  if (args.length < 3) {
    console.error('POST requiere: title, price, category');
    return null;
  }
  
  const [title, price, category] = args;
  
  return {
    title,
    price: parseFloat(price) || price,
    category,
  };
}

/**
 * Ejecuta el comando de la linea de comandos
 * 
 * Analiza los argumentos de la linea de comandos y ejecuta el comando
 * correspondiente. Los comandos disponibles son GET, POST y DELETE.
 * 
 * @version 1.0
 */
async function handleCommand() {

  const parsed = parseArguments();
  
  let {method, endpoint, additionalArgs} = parsed;

  method = method.toUpperCase();

  switch (method) {
    case 'GET':
    case 'DELETE':
      await apiRest(method, endpoint);
      break;
      
    case 'POST':
      const productData = createProductData(additionalArgs);
      if (productData) {
        await apiRest(method, endpoint, productData);
      }
      break;
          
    default:
      console.log('Comando no reconocido. Usa GET, POST o DELETE');
  }
}

handleCommand();