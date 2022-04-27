let registrado = []
for(i=1;i<=3;i++){
    cliente = {
        nome: `Cliente${i}`,
        email: `emailcliente${i}@gmail.com`,
        telefone: `4892324-${i}2332`,
    }
    registrado.push(cliente)
}

for(i=1;i<=3;i++){
    let clientela = Object.create({
        nome: `Clientela${i}`,
        email: `emailclientela${i}@gmail.com`,
        telefone: `4898624-${i}2692`,
    })
    console.log(clientela.nome, clientela.email, clientela.telefone)

    registrado.push(new Object(
        {
            nome: clientela.nome,
            email: clientela.email,
            telefone: clientela.telefone,
        }
    ))
}

console.log(registrado)

