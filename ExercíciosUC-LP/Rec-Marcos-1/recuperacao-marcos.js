// -- // -- Apresentação FOR -- \\ -- \\
// -- // ESTRUTURA DE REPETIÇÃO \\ -- \\

// -- 1 > Estrutura -- \\

//     (inicialização    ;     condição      ; expressão final)
for(let indexExemplo = 0 ; indexExemplo < 10 ; indexExemplo++){
    console.log(indexExemplo)
    /* Resultado: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 */
}

//     (inicialização     ;     condição     ; expressão final)
for(let indexExemplo = 10 ; indexExemplo > 0 ; indexExemplo--){
    console.log(indexExemplo)
    /* Resultado: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 */
}




// -- 2 > Por quê usar o FOR? -- \\

// 2.1 > Reduzir o código

// 2.1.1 > Ao invés de escrever:

console.log("Jogador 1, ")
console.log("Jogador 2, ")
console.log("Jogador 3, ")
console.log("Jogador 4, ")
console.log("Jogador 5, ")
console.log("Jogador 6, ")
console.log("Jogador 7, ")
console.log("Jogador 8, ") // 222 letras
/* Resultado: Jogador 1, Jogador 2, ... */

// 2.1.2 > Você pode escrever:

for(let indexJogadoresExemplo = 1 ; indexJogadoresExemplo <= 8 ; indexJogadoresExemplo++){
    console.log("Jogador " + indexJogadoresExemplo + ", ")
    /* Resultado: Jogador 1, Jogador 2, ... */
} // 151 letras

// 2.1.3 > Segundo exemplo com o FOR

let playerResults = "Resultado: \n"
for(let i = 0; i < 5;i++){
    // playerResults += `Nome do Usuário: ${playerSuccessfullyFinded.nomeUsuario}\nNome do Invocador: ${playerSuccessfullyFinded.invocador}\nRota: ${playerSuccessfullyFinded.funcao}\nCodigo: ${playerSuccessfullyFinded.codigo}`
    /*
    Resultado:
    Nome do Usuário: Exemplo1 - Nome do Invocador: Exemplo11 - Rota: Meio - Codigo: 2
    Nome do Usuário: Exemplo2 - Nome do Invocador: Exemplo21 - Rota: Topo - Codigo: 1
    Nome do Usuário: Exemplo3 - Nome do Invocador: Exemplo31 - Rota: Selva - Codigo: 4
    Nome do Usuário: Exemplo4 - Nome do Invocador: Exemplo41 - Rota: Atirador - Codigo: 5
    Nome do Usuário: Exemplo5 - Nome do Invocador: Exemplo51 - Rota: Suporte - Codigo: 3
    */
}

// 2.2 > Perfeito para usar com Vetores(array/arraia) e Estrutura de Decisão (IF/ELSE - SWITCH CASE)

// 2.2.1 > Vetores(array/arraia)
let contrutoresFormula = ["Mercedes", "Red Bull", "Ferrari", "McLaren", "Alfa Romeo", "Alpha Tauri", "HAAS", "Alpine", "Williams", "Aston Martin"]

for(let i = 0; i < contrutoresFormula.length; i++){
    console.log(contrutoresFormula[i])
    /* 
    Mercedes
    Red Bull
    Ferrari
    McLaren
    Alfa...
    */
}

// 2.2.2 > Estrutura de Decisão (IF/ELSE - SWITCH CASE)

for (let i = 0; i < 5; i++) {
    if(i == 1){
        console.log("Verde")
    }else if(i > 3){
        console.log("Amarelo")
    }else if(i != 3){
        console.log("Vermelho")
    }else{
        console.log("Azul")
    }
}
// Resultado: 
/*
    Vermelho
    Verde
    Vermelho
    Azul
    Amarelo
*/