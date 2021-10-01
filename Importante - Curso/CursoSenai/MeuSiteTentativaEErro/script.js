let validagem = {
    isValid: false,
}

let numeroAleatorio = parseInt(Math.random() * 100)
console.log(validagem.isValid, numeroAleatorio)

function click(){

    if(numeroAleatorio >= 50){
        validagem.isValid = true
        console.log(validagem.isValid)
    }   else{
        validagem.isValid = false
        console.log(validagem.isValid)
        console.log("Tente novamente...")
    }

    if(validagem.isValid === true){
    console.log("Meus parabêns, você está validado!")
    }

}