let readline = require('readline');

let rl = readline.createInterface(
    process.stdin,
    process.stdout
);

  rl.question('Ingrese un poco de texto: ', cad => {
    rl.question('Ingrese el indice desde donde quiere seleccionar la subcadena: ', inicio => {
      rl.question('Ingrese el indice hasta donde quiere seleccionar la subcadena: ', fin => {
        let subcadena = function(cad, inicio, fin) {
            return cad.slice(inicio, fin);
          }
        console.log('La subcadena extraida es: ', subcadena(cad, parseInt(inicio), parseInt(fin)));
        process.exit();
      });
    });
  })