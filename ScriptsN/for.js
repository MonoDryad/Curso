let i = 0
let num = []
for (; i <= 10; i++) {
    if (i === 2){
        console.log('Zero')
        num.push('Zero')
    }
    if (i === 5){
        console.log('Um')
        num.push('Um')
    }
    if (i === 7){
        console.log('Dois')
        num.push('Dois')
    }
    if (i === 10){
        console.log('Três')
        num.push('Três')
        console.log(num.length, num[3], num[2], num[1], num[0])
    break
    }
}