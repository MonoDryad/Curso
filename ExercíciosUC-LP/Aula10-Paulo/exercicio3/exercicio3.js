for(let i = 0; i < 5; i++){
    let s1 = Math.random() * 10000
    let s2 = Math.random() * 10000
    let s3 = Math.random() * 10000
    let s4 = Math.random() * 10000
    let s5 = Math.random() * 10000
    let media = (s1 + s2 + s3 + s4 + s5) / 5
    console.log('Salário 1:', s1.toFixed(2), 'Salário 2:', s2.toFixed(2), 'Salário 3:', s3.toFixed(2), 'Salário 4:', s4.toFixed(2), 'Salário 5:', s5.toFixed(2))
    console.log('Média: R$' + media.toFixed(2))
}