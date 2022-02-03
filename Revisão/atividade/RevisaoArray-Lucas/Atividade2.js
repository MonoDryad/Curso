let userNumb
let arrayNumb = []
let primeira = 0
let segunda = 0

for(let i = 0; i < 10;i++){
    userNumb = prompt('Digite 10 números')
    arrayNumb.push(userNumb)
}

for(let i = 0; i < 5; i++){
    let primeiraParte = Number(arrayNumb.shift())
    primeira += primeiraParte
    console.log(primeira)

    let segundaParte = Number(arrayNumb.pop())
    segunda += segundaParte
    console.log(segunda)
}

alert(primeira - segunda)