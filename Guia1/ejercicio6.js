let readline = require('readline');

let rl = readline.createInterface(
    process.stdin,
    process.stdout
);

  rl.question('Ingrese una frase: ', frase => {
    let contPalabras = function(frase) {
        let palabras = frase.split(/\s+/);
        return palabras.length;
      }
    console.log('El numero de palabras que incluye la frase es de: ',contPalabras(frase));
    process.exit();
  })
