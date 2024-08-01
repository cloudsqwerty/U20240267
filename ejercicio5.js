let readline = require('readline');

let rl = readline.createInterface(
    process.stdin,
    process.stdout
);

function extractSubstring(cad, inicio, fin) {
    return cad.slice(inicio, fin);
  }

  rl.question('Ingrese un poco de texto: ', cad => {
    rl.question('Ingrese el indice desde donde quiere seleccionar la subcadena: ', inicio => {
      rl.question('Ingrese el indice hasta donde quiere seleccionar la subcadena: ', fin => {
        const substring = extractSubstring(cad, parseInt(inicio), parseInt(fin));
        console.log(`La subcadena extraida es: ${substring}`);
        process.exit();
      });
    });
  });