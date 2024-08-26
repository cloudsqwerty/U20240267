let fecha = new Date();
const nMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let mesActual = nMeses[fecha.getMonth()];

console.log(`El mes actual es: ${mesActual}`);