// Fazer um programa no qual o usuário deve digitar as três cores primárias (amarelo, vermelho, azul) e armazenar
// em um vetor. Solicitar três vezes “Digite uma cor primária: ”. Em seguida deve digitar as três cores secundárias
// (laranja, verde, violeta) e armazenar em outro vetor. Solicitar três vezes “Digite uma cor secundária: ”. Um novo
// vetor deve ser criado com cores primárias + secundárias (amarelo, vermelho, azul, laranja, verde, violeta). No início
// dessa lista deve-se adicionar preto e no final branco. Perguntar “Adicionar no início da lista: ” e “Adicionar ao
// final da lista: ”. Mostrar na tela a sequência completa, incluindo preto e branco.
let primaryColors = []
let secondaryColors = []

let userInp

for(let i = 0; i < 6;i++){
    if(i < 3){
        userInp = prompt(`Digite uma cor primária`)
        primaryColors.push(userInp)
    }else{
        userInp = prompt(`Digite uma cor secundária`)
        secondaryColors.push(userInp)
    }
}

let allColors = primaryColors.concat(secondaryColors)

alert(allColors)

let firstPlace = prompt('Adicionar no início da lista:')
let secondPlace = prompt('Adicionar no fim da lista:')

allColors.unshift(firstPlace)
allColors.push(secondPlace)

allColors.unshift('Branco')
allColors.push('Preto')

alert(allColors)