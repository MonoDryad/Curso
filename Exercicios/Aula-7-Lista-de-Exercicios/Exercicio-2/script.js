// 2 – Verificar o maior número
//  Crie um algoritmo, utilizando HTML e JavaScript, que faça:
//  Leia o valor de x;
//  Leia o valor de y;
//  Descubra o valor de a = x * 2;
//  Descubra o valor de b = y * 3;
//  Informe o usuário qual deles é o maior.

function verificar(){
    let v1 = document.getElementById('valorx').value
    let v2 = document.getElementById('valory').value

    let calculoa = v1 * 2 
    let calculob = v2 * 3

    if(calculoa >= calculob){
        alert(calculoa + ' é maior que ' + calculob)
        document.getElementById('resultado').value = "Seu número " + calculoa + " é maior"
        document.getElementById('resultadoa').value = calculoa
        document.getElementById('resultadob').value = calculob
    }else{
        alert(calculoa + ' é menor que ' + calculob)
        document.getElementById('resultado').value = "Seu número " + calculoa + " é menor"
        document.getElementById('resultadob').value = calculob
        document.getElementById('resultadoa').value = calculoa
    }
}