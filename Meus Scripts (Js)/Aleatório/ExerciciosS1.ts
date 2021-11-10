// Exercicio 1
console.log("")
console.log("Exercicio 1")

let clientes = {
    nome1: "Rai,",
    nome2: "Ruan,",
    nome3: "Andrey",
}

console.log(clientes.nome1, clientes.nome2, clientes.nome3)
// Exercicio 2
console.log("")
console.log("Exercicio 2")

let comidas = {
    alimento1: "Banana,",
    alimento2: "Maçã,",
    alimento3: "Arroz,",
    alimento4: "Manga,",
    alimento5: "Kiwi",
}

console.log(comidas.alimento1, comidas.alimento2, comidas.alimento3, comidas.alimento4, comidas.alimento5)
// Exercicio 3
console.log("")
console.log("Exercicio 3")

let primeiroNome = {
    primeiroNome1: "Rai",
    primeiroNome2: "Ruan",
}

let segundoNome = {
    segundoNome1: " Raul",
    segundoNome2: " Felipe",
}

console.log(primeiroNome.primeiroNome1 + segundoNome.segundoNome1)
console.log(primeiroNome.primeiroNome2 + segundoNome.segundoNome2)

// Exercicio 4
console.log("")
console.log("Exercicio 4")
let numeroAleatorio = 20;
let numeroAleatorio2 = 30;
let isValid: boolean = true;
if(numeroAleatorio >= numeroAleatorio2){
    isValid = false;
    console.log(numeroAleatorio2, isValid)
} else{
    isValid = true;
    console.log(numeroAleatorio, isValid)
}

let validos = {
    isValid: true,
    isActive: true,
    isTrue: false,
    isFalse: true,
    isDoing: true,
    isAttacking: false,
}
console.log(validos)

// Exercicio 5
console.log("")
console.log("Exercicio 5")

let numeros = {
    numero1: 1,
    numero2: 2,
    numero3: 3,
    numero4: 4,
    numero5: 5,
    numero6: 6,
    numero7: 7,
    numero8: 8,
}

console.log(numeros)

// Exercicio 6
console.log("")
console.log("Exercicio 6")

const PI = 3.14;
const g = 5.23;
const T = 1.12;
const GG = 2.58;
const GLHF = 4.95;

console.log(PI, g, T, GG, GLHF)

// Exercicio 7
console.log("")
console.log("Exercicio 7")

let value1 = Math.random() * 30;
let value2 = Math.random() * 30;
let n = value2.toFixed(0);
let n1 = value1.toFixed(0);
console.log(value1, value2)
console.log(n1, n)

let value3 = value1 - value2;
let n2 = value3.toFixed(0);
console.log(n2 , 'Número final')

// Exercicio 8
console.log("")
console.log("Exercicio 8")

let dividir1 = Math.random() * 100;
let dividir2 = Math.random() * 30;
let d = dividir1.toFixed(0);
let d2 = dividir2.toFixed(0);
console.log(value1, value2)
console.log(d, d2)

let dividir3 = dividir1 / dividir2;
let d3 = dividir3.toFixed(2);
console.log(d3 , 'Número final')

// Exercicio 9
console.log("")
console.log("Exercicio 9")

let multiplicar1 = Math.random() * 30;
let multiplicar2 = Math.random() * 30;
let m = multiplicar1.toFixed(0);
let m2 = multiplicar2.toFixed(0);
console.log(value1, value2)
console.log(m, m2)

let multiplicar3 = multiplicar1 * multiplicar2;
let m3 = multiplicar3.toFixed(0);
console.log(m3 , 'Número final')


// Exercicio 10
console.log("")
console.log("Exercicio 10")

let nu1 = 10
let nu2 = 2
let divisao = nu1 / nu2;
let resultado = nu1 % nu2;
console.log(divisao, resultado)

// Exercicio 11
console.log("")
console.log("Exercicio 11")

let numeroTotal = 100
let numeroDoUsuario = 5
let percentual = numeroDoUsuario * 100 / numeroTotal
console.log("Seu valor é de",percentual,"%")
// Exercicio 11 eu não consegui fazer.

// Exercicio 12
console.log("")
console.log("Exercicio 12")

let produtos = {
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
}

let preços = produtos.valor1 + produtos.valor2 + produtos.valor3 + produtos.valor4 + produtos.valor5
let preço = preços.toFixed(2);

console.log(produtos.produto1, "= R$", produtos.valor1)
console.log(produtos.produto2, "= R$", produtos.valor2)
console.log(produtos.produto3, "= R$", produtos.valor3)
console.log(produtos.produto4, "= R$", produtos.valor4)
console.log(produtos.produto5, "= R$", produtos.valor5)

console.log("Total: R$",preço)

// Exercicio 13
console.log("")
console.log("Exercicio 13")

let Crie4variáveis = "Crie 4 variáveis"
let eMostreAoUsuário = " e mostre ao usuário"
let aSomaDosTotais = " a soma dos totais"
let deCaracteres = " de caracteres "

let caracteresTotal = Crie4variáveis.length + eMostreAoUsuário.length + aSomaDosTotais.length + deCaracteres.length
console.log(Crie4variáveis + eMostreAoUsuário + aSomaDosTotais + deCaracteres + "=", caracteresTotal)

// Exercicio 14
console.log("")
console.log("Exercicio 14")

let base1 = Math.pow(7, 2);
let base2 = Math.pow(7, 3);
let base3 = Math.pow(2, 10);

console.log(base1,base2,base3)

// Exercicio 15
console.log("")
console.log("Exercicio 15")

let raizquadrada1 = Math.sqrt(64);
let raizquadrada2 = Math.sqrt(128);
let raizquadrada3 = Math.sqrt(512);
let raizquadrada4 = Math.sqrt(23);

console.log(raizquadrada1,",",raizquadrada2,",",raizquadrada3,",",raizquadrada4)