let readline = require('readline');

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

  rl.question('Ingrese una frase: ', frase =>{
    rl.question('Ingrese la palabra que desea reemplazar: ', palabra =>{
      rl.question('Ingrese el reemplazo de la palabra seleccionada: ', reemplazo =>{
        let modFrase = function(frase, palabra, reemplazo) {
            let rgxp = new RegExp(palabra);
            return frase.replace(rgxp, reemplazo);
        };
        console.log('Frase modificada: ', modFrase(frase, palabra, reemplazo));
        process.exit();
      });
    });
  })
