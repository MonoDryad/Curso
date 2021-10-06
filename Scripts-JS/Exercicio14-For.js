//var i = 4;
//for (0 ** i; i < 40; i++) {
//    console.log(i);
//}

let numero = 2;
console.log(numero,"= Base");

let valorExpoente = parseInt(Math.random() * 10);
console.log(valorExpoente,"= Expoente");

for (;numero**=valorExpoente;) {
    console.log(numero,"= Potência");
    if (numero >= 0) break;
}

//let base1 = Math.pow(2, 2);
//console.log(base1)

// let notas = {
//     nota1: parseInt(Math.random() * 10),
//     nota2: parseInt(Math.random() * 10),
//     nota3: parseInt(Math.random() * 10),
//     nota4: parseInt(Math.random() * 10),
// }

// let resultado1 = notas.nota1 + notas.nota2 + notas.nota3 + notas.nota4
// let resultado2 = resultado1 / 4
// console.log(notas.nota1, notas.nota2, notas.nota3, notas.nota4)
// console.log(resultado2)