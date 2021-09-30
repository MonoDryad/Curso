"use strict";
// Exercicio 1
console.log("");
console.log("Exercicio 1");
var clientes = {
    nome1: "Amongus,",
    nome2: "Sus,",
    nome3: "Cavalo",
};
console.log(clientes.nome1, clientes.nome2, clientes.nome3);
// Exercicio 2
console.log("");
console.log("Exercicio 2");
var comidas = {
    alimento1: "Banana,",
    alimento2: "Maçã,",
    alimento3: "Arroz,",
    alimento4: "Manga,",
    alimento5: "Kiwi",
};
console.log(comidas.alimento1, comidas.alimento2, comidas.alimento3, comidas.alimento4, comidas.alimento5);
// Exercicio 3
console.log("");
console.log("Exercicio 3");
var primeiroNome = {
    primeiroNome1: "Rai",
    primeiroNome2: "Ruan",
};
var segundoNome = {
    segundoNome1: " Raul",
    segundoNome2: " Felipe",
};
console.log(primeiroNome.primeiroNome1 + segundoNome.segundoNome1);
console.log(primeiroNome.primeiroNome2 + segundoNome.segundoNome2);
// Exercicio 4
console.log("");
console.log("Exercicio 4");
var numeroAleatorio = 20;
var numeroAleatorio2 = 30;
var isValid = true;
if (numeroAleatorio >= numeroAleatorio2) {
    isValid = false;
    console.log(numeroAleatorio2, isValid);
}
else {
    isValid = true;
    console.log(numeroAleatorio, isValid);
}
var validos = {
    isValid: true,
    isActive: true,
    isTrue: false,
    isFalse: true,
    isDoing: true,
    isAttacking: false,
};
console.log(validos);
// Exercicio 5
console.log("");
console.log("Exercicio 5");
var numeros = {
    numero1: 1,
    numero2: 2,
    numero3: 3,
    numero4: 4,
    numero5: 5,
    numero6: 6,
    numero7: 7,
    numero8: 8,
};
console.log(numeros);
// Exercicio 6
console.log("");
console.log("Exercicio 6");
var PI = 3.14;
var g = 5;
var T = 1;
var GG = 2;
var GLHF = 4;
console.log(PI, g, T, GG, GLHF);
// Exercicio 7
console.log("");
console.log("Exercicio 7");
var value1 = Math.random() * 30;
var value2 = Math.random() * 30;
var n = value2.toFixed(0);
var n2 = value1.toFixed(0);
console.log(value1, value2);
console.log(n2, n);
var value3 = value1 - value2;
var n3 = value3.toFixed(0);
console.log(n3, 'Número final');
// Exercicio 8
console.log("");
console.log("Exercicio 8");
var dividir1 = Math.random() * 100;
var dividir2 = Math.random() * 30;
var d = dividir1.toFixed(0);
var d2 = dividir2.toFixed(0);
console.log(value1, value2);
console.log(d, d2);
var dividir3 = dividir1 / dividir2;
var d3 = dividir3.toFixed(2);
console.log(d3, 'Número final');
// Exercicio 9
console.log("");
console.log("Exercicio 9");
var multiplicar1 = Math.random() * 30;
var multiplicar2 = Math.random() * 30;
var m = multiplicar1.toFixed(0);
var m2 = multiplicar2.toFixed(0);
console.log(value1, value2);
console.log(m, m2);
var multiplicar3 = multiplicar1 * multiplicar2;
var m3 = multiplicar3.toFixed(0);
console.log(m3, 'Número final');
// Exercicio 10
console.log("");
console.log("Exercicio 10");
var divisao = Math.floor(14 / 2);
console.log(divisao);
// Exercicio 11
console.log("");
console.log("Exercicio 11");
var numeroTotal = 100;
var numeroDoUsuario = 5;
var percentual = numeroDoUsuario * 100 / numeroTotal;
console.log("Seu valor é de", percentual, "%");
// Exercicio 12
console.log("");
console.log("Exercicio 12");
var produtos = {
    produto1: "5Kg Arroz",
    produto2: "2Kg Pêssego",
    produto3: "5Kg Feijão",
    produto4: "5kg Macarrão",
    produto5: "2Kg Kiwi",
    valor1: 15.00,
    valor2: 8.49,
    valor3: 32.00,
    valor4: 46.00,
    valor5: 13.39,
};
var preços = produtos.valor1 + produtos.valor2 + produtos.valor3 + produtos.valor4 + produtos.valor5;
var preço = preços.toFixed(2);
console.log(produtos.produto1, "= R$", produtos.valor1);
console.log(produtos.produto2, "= R$", produtos.valor2);
console.log(produtos.produto3, "= R$", produtos.valor3);
console.log(produtos.produto4, "= R$", produtos.valor4);
console.log(produtos.produto5, "= R$", produtos.valor5);
console.log("Total: R$", preço);
// Exercicio 13
console.log("");
console.log("Exercicio 13");
var Crie4variáveis = "Crie 4 variáveis";
var eMostreAoUsuário = " e mostre ao usuário";
var aSomaDosTotais = " a soma dos totais";
var deCaracteres = " de caracteres";
var caracteresTotal = Crie4variáveis.length + eMostreAoUsuário.length + aSomaDosTotais.length + deCaracteres.length;
console.log(Crie4variáveis + eMostreAoUsuário + aSomaDosTotais + deCaracteres + " =", caracteresTotal);
// Exercicio 14
console.log("");
console.log("Exercicio 14");
var base1 = Math.pow(7, 2);
var base2 = Math.pow(7, 3);
var base3 = Math.pow(2, 10);
console.log(base1, base2, base3);
// Exercicio 15
console.log("");
console.log("Exercicio 15");
var raizquadrada1 = Math.sqrt(64);
var raizquadrada2 = Math.sqrt(128);
var raizquadrada3 = Math.sqrt(512);
var raizquadrada4 = Math.sqrt(23);
console.log(raizquadrada1, ",", raizquadrada2, ",", raizquadrada3, ",", raizquadrada4);
