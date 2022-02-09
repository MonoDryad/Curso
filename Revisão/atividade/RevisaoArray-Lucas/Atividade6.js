// 6) Palíndromo é aquele elemento que, se lido de trás para frente e de frete para trás, é o mesmo. Exemplos: 616, 2112 2442, 87655678. Criar um vetor onde deve-se digitar 6 números e verificar se o vetor é palíndromo. (DESAFIO: fazer com 7 números).

let userNumb
let arrayNumb = []
let numbers

for(let i = 0; i < 7;i++){
    userNumb = prompt(`Digite 7 números palíndromos (616, 2112) - Número ${i + 1}`)
    arrayNumb.push(userNumb)
}

for(let i = 0, j = 7; i < 7;i++, j--){
    if(arrayNumb[i] == arrayNumb[j]){
        console.log(`${arrayNumb} número é palíndromo`)
    }else{
        console.log('O vetor não é palíndromo')
    }
}
