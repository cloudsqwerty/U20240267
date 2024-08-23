let readline = require('readline');
let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

function celsius(grades){
    return (grades* 9/5)+32;
}

rl.question('Ingrese la temperatura en grados celsius: ', (answer)=>{
    const grades = parseFloat(answer);
    const farenheit = celsius(grades);
    console.log(`${grades}C es igaul a ${farenheit}F`);
    rl.close();

})