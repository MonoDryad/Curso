// 5 – Gratificação
// A Loja Silva S. A. está oferecendo aos seus funcionários uma gratificação de 20% no salário. Para ganhar
// a gratificação o funcionário deve vender R$10.000,00 ou mais, em produtos no mês. Na loja são vendidos
// dois produtos A e B, custando R$50,00 e R$60,00 respectivamente.
// O usuário deverá informar a quantidade de produto A e B vendidos e o salário;
// Faça um algoritmo que calcule o salário do funcionário, levando em consideração a gratificação;
// Caso o funcionário não tenha ganhado a gratificação, informe quantos reais em vendas faltou para alcançar
// a meta de R$10.000,00 em vendas.

function verificar(){
    let valorx = document.getElementById('valorx').value
    let valory = document.getElementById('valory').value
    let valora = document.getElementById('valora').value
    let valorr = 10000
    let gsalario = 0.20

    let calculoa = valorx * 50
    let calculob = valory * 60
    let calculoc = calculoa + calculob

    if(calculoc >= 10000){
        let salarioCalculo = valora * gsalario
        let salarioCalculoFim = Math.floor(salarioCalculo) + Math.floor(valora) 
        document.getElementById('resultado').value = calculoa
        document.getElementById('resultadob').value = calculob
        document.getElementById('resultadoc').value = calculoc
        document.getElementById('fim').value = "Seu salário aumentou! Agora é R$" + salarioCalculoFim
    }else{
        let falta = Math.floor(valorr) - Math.floor(calculoa) - Math.floor(calculob)
        document.getElementById('resultado').value = calculoa
        document.getElementById('resultadob').value = calculob
        document.getElementById('resultadoc').value = calculoc
        document.getElementById('fim').value = "Ainda é preciso vender mais produtos. Resta R$" + falta 
    }
}