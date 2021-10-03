let primeiroNome = {
    nome1: "Rai",
    nome2: "Ruan",
    nome3: "Paulo",
    nome4: "Roberto"
}

let segundoNome = {
    nome1: " Raul",
    nome2: " Felipe",
    nome3: " Araújo",
    nome4: " Freitas"
}

let nomeCompleto = primeiroNome.nome1 + segundoNome.nome1

if(nomeCompleto === primeiroNome.nome1 + segundoNome.nome1){
    console.log("Está certo")
}else{
    console.log("Não")
}