let arrayNumero = [12,32,1123,355,15,0,10,20,30,90,40,50,70,11,15,13,44,35,599,39]
// particao(arrayNumero, 0, arrayNumero.length-1)
// function trocar(arrayNumero, i, j) {
//     let temp = arrayNumero[i];
//     arrayNumero[i] = arrayNumero[j];
//     arrayNumero[j] = temp;
// }

// function particao(arrayNumero, menorNumero, maiorNumero) {

//     let pivot = arrayNumero[maiorNumero];
//     let i = (menorNumero - 1);
 
//     for (let j = menorNumero; j <= maiorNumero - 1; j++) {

//         if (arrayNumero[j] < pivot) {
//             i++;
//             trocar(arrayNumero, i, j);
//         }
//     }
//     trocar(arrayNumero, i + 1, maiorNumero);
//     return (i + 1);
// }

// function quickSort(arrayNumero, menorNumero, maiorNumero) {
//     if (menorNumero < maiorNumero) {
 
//         let pi = particao(arrayNumero, menorNumero, maiorNumero);

//         quickSort(arrayNumero, menorNumero, pi - 1);
//         quickSort(arrayNumero, pi + 1, maiorNumero);
//     }
// }

// function escreverArray(arrayNumero, size) {
//     for (let i = 0; i < size; i++)
//         document.write(arrayNumero[i] + " ");
 
//     document.write("<br>");
// }

// let n = arrayNumero.length;
 
// quickSort(arrayNumero, 0, n - 1);
// document.write("Array ordenada: ");
// escreverArray(arrayNumero, n);
particao(arrayNumero, 0 ,arrayNumero.length-1)
function particao(arrayNumero, menorNumero, maiorNumero){
    let ultimoNumero = arrayNumero[maiorNumero]
    let paraTrocar = (menorNumero - 1)

    for(let i = menorNumero; i <= maiorNumero - 1; i++){
        if(arrayNumero[i] < ultimoNumero){
            paraTrocar++
            trocar(arrayNumero, paraTrocar, i)
        }
        trocar(arrayNumero, paraTrocar + 1, maiorNumero)
        return (paraTrocar + 1)
    }
}

function trocar(arrayNumero, i, j) {
    let temp = arrayNumero[i];
    arrayNumero[i] = arrayNumero[j];
    arrayNumero[j] = temp;
}

function quickSort(arrayNumero, menorNumero, maiorNumero) {
    if (menorNumero < maiorNumero) {
 
        let pi = particao(arrayNumero, menorNumero, maiorNumero);

        quickSort(arrayNumero, menorNumero, pi - 1);
        quickSort(arrayNumero, pi + 1, maiorNumero);
    }
}

function escreverArray(arrayNumero, size) {
    for (let i = 0; i < size; i++){
        document.write(arrayNumero[i] + ", ");  
    }
    document.write("<br>");
}

let n = arrayNumero.length;

quickSort(arrayNumero, 0, n - 1);
document.write("Array ordenada: ");
escreverArray(arrayNumero, n);