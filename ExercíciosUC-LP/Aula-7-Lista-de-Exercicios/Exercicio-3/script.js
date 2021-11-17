// 3 – Percentual
//  Crie um algoritmo, utilizando HTML e JavaScript, que faça:
//  Leia o valor de x;
//  Calcule o percentual de 27% de x e salve em y;
//  Mostre para o usuário o valor de x + y.

function verificar(){
    let v1 = document.getElementById('valorx').value
    let porcentagem = 0.27
    
    let calculox = v1 * porcentagem
    let calculof = Math.floor(calculox) + Math.floor(v1)

    document.getElementById('resultado').value = calculof
}