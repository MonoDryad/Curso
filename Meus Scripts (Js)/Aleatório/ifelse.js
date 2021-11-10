let n1 = Math.random() * 10
let n2 = Math.random() * 10
let n3 = Math.random() * 10

let média = (n1 + n2 + n3) / 3

console.log(n1.toFixed(2),  n2.toFixed(2), n3.toFixed(2))
console.log(média.toFixed(2))

if (média >= 7){
    console.log("Aprovado!" + " A média é de: " + média.toFixed(1))
} 

else if(média >= 3){
    console.log("Necessário fazer a recupeção!" + " A média é de: " + média.toFixed(1))
}

else {
    console.log("Reprovado!" + " A média é de: " + média.toFixed(1));
} 