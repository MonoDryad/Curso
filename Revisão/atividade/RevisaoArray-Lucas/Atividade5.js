// 5) Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final. Deve ser perguntado em sequência “Qual fruta adicionar?”. Quando for adicionado a cereja, finalizar com a frase “Sua salada de frutas está pronta!”. Mostrar a lista das frutas. (DESAFIO: Mostrar também a quantidade de cada fruta)

let userNumb
let arrayNumb = []

for(let i = 0; i < 5;i++){
    userNumb = prompt('Selecione 5 frutas')
    arrayNumb.push(userNumb)
    if(i == 4 && userNumb == 'cereja' || i == 4 && userNumb == 'Cereja'){
        alert('Sua salada de frutas está pronta!')
    }
}

alert('Frutas: ' + arrayNumb)

