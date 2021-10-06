// let numero = parseInt(Math.random() * 10);
// console.log(numero,"= Valor 1");

// let valorExpoente = parseInt(Math.random() * 10);
// console.log(valorExpoente,"= Valor 2");

// for (;numero+=valorExpoente;) {
//     console.log(numero,"= Resultado");
//     if (numero >= 0) break;
// }

// console.log();

// let numeroInfinito = 3000;
// let numero1 = parseInt(Math.random() * 900);
// console.log(numero1,"= Valor 1");

// let valorExpoente1 = parseInt(Math.random() * 900);
// console.log(valorExpoente1,"= Valor 2");

// for (;numero1-=valorExpoente1;) {
//     console.log(numero1,"= Resultado");
//     if (numero1 <= numeroInfinito) break;
// }

let validagem = {
    isValid: false,
}

let numeroAleatorio = parseInt(Math.random() * 100)
console.log(validagem.isValid, numeroAleatorio)

function click(){

    if(numeroAleatorio >= 50){
        validagem.isValid = true
        console.log(validagem.isValid)
    }   else{
        validagem.isValid = false
        console.log(validagem.isValid)
        console.log("Tente novamente...")
    }

    if(validagem.isValid === true){
    console.log("Meus parabêns, você está validado!")
    }

}