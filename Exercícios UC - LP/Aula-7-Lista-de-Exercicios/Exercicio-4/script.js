// 4 – Petshop
//  A empresa PetShop Plus Ltda. está oferecendo aos seus clientes uma promoção para dois de seus
// shampoos (shampoo A e shampoo B). Na promoção os clientes com menor idade possuem 10% de
// desconto e os com maior idade 5%.
//  Faça um algoritmo que calcule o valor dos shampoos, considerando o desconto oferecido pela
// empresa.
//  Peça ao usuário para informar os valores do shampoo A e do shampoo B.
//  Informe ao usuário o preço dos produtos com desconto.

function verificar(){
    let v1 = document.getElementById('valorx').value
    let v2 = document.getElementById('valory').value
    let i1 = document.getElementById('valora').value
    let porcentagem1 = 0.05
    let porcentagem2 = 0.10

    if(i1 >= 18){
        let calculox = v1 * porcentagem1
        let calculoy = v2 * porcentagem1
        let calculof = Math.floor(v1) - Math.floor(calculox)
        let calculob = Math.floor(v2) - Math.floor(calculoy)
        calculob.toFixed(2)
        calculof.toFixed(2)
        let calculoi = calculob + calculof

        document.getElementById('resultado').value = calculof
        document.getElementById('resultadob').value = calculob
        document.getElementById('resultadoc').value = calculoi
    }else{
        let calculox = v1 * porcentagem2
        let calculoy = v2 * porcentagem2
        let calculof = v1 - calculox
        let calculob = v2 - calculoy
        calculob.toFixed(2)
        calculof.toFixed(2)
        let calculoi = calculob + calculof

        document.getElementById('resultado').value = calculof
        document.getElementById('resultadob').value = calculob
        document.getElementById('resultadoc').value = calculoi
    }
}