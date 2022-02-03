// 3) Cria um programa onde o usuário digite 5 números inteiros. Ao terminar de digitar os números, mostrar uma lista somente com números ímpares digitados e a soma desses números.

let userNumb
let arrayNumb = []

for(let i = 0; i < 5;i++){
    userNumb = prompt('Digite 5 números')
    arrayNumb.push(userNumb)
}

let impar = arrayNumb.filter(n => n%2)

alert(impar)
console.log(arrayNumb)
console.log(impar)