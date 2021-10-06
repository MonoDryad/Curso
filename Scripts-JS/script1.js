let value1 = 15
let value2 = parseInt(Math.random() * 30)

console.log(value1,value2)

if(value1 >= value2){
    console.log('Tudo bem?')

}else{
    console.log('Não')

}

let x = 13
let y = 12
let resultado = x+y
console.log(resultado)

let numeros = {
    numero1: parseInt(Math.random() * 30),
    numero2: parseInt(Math.random() * 30),
    numero3: parseInt(Math.random() * 30),
    numero4: parseInt(Math.random() * 30),
    numero5: parseInt(Math.random() * 30),
    numero6: parseInt(Math.random() * 30),
    numero7: parseInt(Math.random() * 30),
    numero8: parseInt(Math.random() * 30),
}

let adicionar = numeros.numero5 + numeros.numero8
let adicionar2 = numeros.numero4 + numeros.numero7 - numeros.numero6
let adicionar3 = numeros.numero1 * numeros.numero2 / numeros.numero3

if(adicionar2 >= adicionar3){
    console.log(adicionar2,"é maior ou igual a", adicionar3)
} else if(adicionar == adicionar3){
    console.log(adicionar,"é igual a", adicionar3)
} else{
    console.log(adicionar, adicionar2,"tentativa1", adicionar3)
}

console.log(adicionar, adicionar2, adicionar3)

let validos = {
    isActive: true,
    isTrue: false,
    isFalse: true,
    isDoing: true,
    isAttacking: false,
};

let valido = parseInt(Math.random() * 30)
let valido2 = 15

if(valido >= valido2){
    isValid = true
}else{
    isValid = false
}

console.log(isValid, valido, valido2)
if(isValid == true){
    console.log("O comando inserido é valido")
    isValid = false
    isDoing = true
}  else{
    console.log("O comando inserido é invalido")
    isValid = true
    isDoing = false
}

console.log(isValid)

if(isValid == false, isDoing == true){
    console.log("Boa!")
} else{
    console.log("Tente novamente...")
}