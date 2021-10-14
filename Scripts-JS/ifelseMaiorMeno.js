let n1 = Math.random() * 30
let n2 = Math.random() * 30
let n3 = Math.random() * 30
let n4 = Math.random() * 30

if(n1 > n3 && n2 > n4){
    console.log(n1, n2, n3)
    if(n2 > n3){
        console.log("funcionando segundo if")
        console.log(n1, n2, n3, " 1")
    } else {
        console.log("não está funcionando segundo if")
        console.log(n1, n2, n3, " 2")
    }
} else {
    console.log("Else da primeira if funcionando")
    console.log(n1, n2, n3, " 3")
    if(n2 >= n3){
        console.log("funcionando terceiro if")
        console.log(n1, n2, n3, " 4")
    } else {
        console.log("não está funcionando terceiro if")
        console.log(n1, n2, n3, " 5")
    }
}