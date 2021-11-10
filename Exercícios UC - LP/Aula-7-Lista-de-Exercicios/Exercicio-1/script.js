// 1 – Verificar se um número é par ou impar
//  Crie um algoritmo, utilizando HTML e JavaScript, que faça:
//  Leia o valor de x;
//  Informe ao usuário se ela é par ou ímpar.

function verificar(){
    let v = document.getElementById('Valor').value
    if(v % 2 == 0){
        document.getElementById('resultado').value = "Seu número é par!"
    }else {
        document.getElementById('resultado').value = "Seu número é impar!"
    }
}