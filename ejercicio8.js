let readline = require('readline');

let rl = readline.createInterface(
    process.stdin,
    process.stdout
);

  rl.question('Ingrese una palabra: ', palabra => {
    let verPalindromo = function(palabra) {
        let lowercasePal = palabra.toLowerCase();
        let revertirPal = lowercasePal.split("").reverse().join("");
        return lowercasePal === revertirPal;
      }
    console.log(`Es "${palabra}" un palindromo? Respuesta: ${verPalindromo(palabra) ? 'Si' : 'No'}`);
    process.exit();
  })