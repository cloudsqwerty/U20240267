let readline = require('readline');

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

function reemplazar(frase, palabra, reemplazo) {
    const rgxp = new RegExp(palabra);
    return frase.replace(rgxp, reemplazo);
};

  rl.question('Ingrese una frase: ', frase =>{
    rl.question('Ingrese la palabra que desea reemplazar: ', palabra =>{
      rl.question('Ingrese el reemplazo de la palabra seleccionada: ', reemplazo =>{
        const modFrase = reemplazar(frase, palabra, reemplazo);
        console.log(`Frase modificada: ${modFrase}`);
        process.exit();
      });
    });
  });