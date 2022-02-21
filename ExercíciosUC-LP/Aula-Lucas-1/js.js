let pedrinho = 1.80
let robertinho = 1.65
let anos = 0

while(pedrinho > robertinho){
    pedrinho += 0.01
    robertinho += 0.03
    anos++
    console.log(`Pedrinho ${pedrinho.toFixed(2)}cm - Robertinho ${robertinho.toFixed(2)}cm - Anos ${anos}`)
}
