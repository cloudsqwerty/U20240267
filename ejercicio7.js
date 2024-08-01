let readline = require('readline');

let rl = readline.createInterface(
    process.stdin,
    process.stdout
);

  rl.question('Ingrese un poco de texto: ', texto => {
    let revertir = function(texto) {
        return texto.split("").reverse().join("");
      }
    console.log('Texto revertido: ',revertir(texto));
    process.exit();
  })