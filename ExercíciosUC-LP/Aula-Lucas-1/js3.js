let playerOne = prompt('Nome do jogador 1')
let playerTwo = prompt('Nome do jogador 2')

let playerTurn = 0
let scorePlayer1 = 0
let scorePlayer2 = 0

let cardsPlayer1 = []
let cardsPlayer2 = []

while (playerTurn < 5) {
    let newPlayerCard1 = Number(prompt(`Jogador ${playerOne}: Carta ${playerTurn+1}`))
    let newPlayerCard2 = Number(prompt(`Jogador ${playerTwo}: Carta ${playerTurn+1}`))
    if(newPlayerCard1 > 13 || newPlayerCard1 == null){
        newPlayerCard1 = Number(prompt(`Jogador 1: Re-digite o número da carta ${playerTurn+1}`))
    }else if(newPlayerCard2 > 13 || newPlayerCard2 == null){
        newPlayerCard2 = Number(prompt(`Jogador 2: Re-digite o número da carta ${playerTurn+1}`))
    }
    cardsPlayer1.push(newPlayerCard1)
    cardsPlayer2.push(newPlayerCard2)
    playerTurn++
}
playerTurn = 4

while (cardsPlayer1.length-1 > 0){
    alert('A')
    if(cardsPlayer1[playerTurn] > cardsPlayer2[playerTurn]){
        scorePlayer1++
        alert(`A carta do ${playerOne} (${cardsPlayer1[playerTurn]}) ganhou do ${playerTwo} (${cardsPlayer2[playerTurn]}). Jogador 1: ${scorePlayer1} - Jogador 2: ${scorePlayer2}`)
        cardsPlayer1.pop()
        cardsPlayer2.pop()
    }else if(cardsPlayer1[playerTurn] === cardsPlayer2[playerTurn]){
        alert(`Ambas as cartas eram iguais. (${cardsPlayer1[playerTurn]})`)
        cardsPlayer1.pop()
        cardsPlayer2.pop()
    }else if(cardsPlayer1[playerTurn] < cardsPlayer2[playerTurn]){
        scorePlayer2++
        alert(`A carta do ${playerTwo} (${cardsPlayer2[playerTurn]}) ganhou do ${playerOne} (${cardsPlayer1[playerTurn]}). Jogador 1: ${scorePlayer1} - Jogador 2: ${scorePlayer2}`)
        cardsPlayer1.pop()
        cardsPlayer2.pop()
    }
    playerTurn--
    if(playerTurn == -1){
        alert(`Resultado:\n${playerOne}: ${scorePlayer1}\n${playerTwo}: ${scorePlayer2}`)
    }
}
