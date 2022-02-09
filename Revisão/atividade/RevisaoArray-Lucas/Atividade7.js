// 7) Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. Caso exista, o programa deve mostrar todos os índices que ele se encontra.

let numbArray = [4,12,16,11,66,44,32,15,19,666]
let numbFind = undefined
let userNumber = Number(prompt(`Escolha um número`))

let isTrue = numbArray.includes(userNumber)
let index = numbArray.indexOf(userNumber)

if(isTrue == true){
    console.log(`O número ${userNumber} está no vetor, no index ${index}!`)
}else{
    console.log('Tente novamente')
}