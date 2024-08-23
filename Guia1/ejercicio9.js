let readline = require('readline');

let rl = readline.createInterface(
    process.stdin,
    process.stdout
);

  rl.question('Ingrese una palabra: ', palabra => {
    let contVocales = function(palabra) {
        const lowercasePal = palabra.toLowerCase();
        const vocales = lowercasePal.match(/[aeiou]/g);
        return vocales ? vocales.length : 0;
      }
    console.log(`La palabra "${palabra}" contiene ${contVocales(palabra)} vocales.`);
    process.exit();
  })
