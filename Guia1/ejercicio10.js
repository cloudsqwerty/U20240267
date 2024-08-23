let readline = require('readline');

let rl = readline.createInterface(
    process.stdin,
    process.stdout
);

  rl.question('Ingrese una frase: ', frase => {
    let capitalFrase = function(frase) {
        let palabras = frase.split(' ');
        let capitalFrase = palabras.map(palabra => {
          return palabra.charAt(0).toUpperCase() + palabra.slice(1);
        });
        return capitalFrase.join(' ');
      }
    console.log(`La frase con cada palabra capitalizadas es: ${capitalFrase(frase)}`);
    process.exit();
  })
