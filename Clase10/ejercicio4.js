let readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese la primera fecha en en el formato que se muestra a contunuacion (incluyendo guiones): (YYYY-MM-DD) ', (fecha1) => {
  rl.question('Ingrese la segunda fecha en en el formato que se muestra a contunuacion (YYYY-MM-DD) ', (fecha2) => {
    let objFecha1 = new Date(fecha1);
    let objFecha2 = new Date(fecha2);

    if (isNaN(objFecha1.getTime()) || isNaN(objFecha2.getTime())) {
      console.log('Formato no valido. Por favor use (YYYY-MM-DD).');
    } else {
      let difTiempo = Math.abs(objFecha2 - objFecha1);
      let difDias = Math.ceil(difTiempo / (1000 * 60 * 60 * 24));
      console.log(`La diferencia entre ${fecha1} y ${fecha2} es de: ${difDias} dias.`);
    }
    rl.close();
  });
});