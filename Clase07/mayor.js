let readline = require('readline');
let rl = readline.createInterface(
    process.stdin,
    process.stdout
);

function maximoDeTres(n1, n2, n3) {
    return Math.max (n1,n2,n3);
}

rl.question('Ingrese el primer numero: ', (num1)=>{
    rl.question('Ingrese el segundo numero: ', (num2)=>{
        rl.question('Ingrese el tercer numero: ', (num3)=>{
            const n1 = parseFloat(num1);
            const n2 = parseFloat(num2);
            const n3 = parseFloat(num3);
            const answer = maximoDeTres(n1, n2, n3)
            console.log(`El mayor numero es: ${answer}`);
        rl.close()})
    })
})
