class Conta{
    #numeroAgencia
    #numeroConta
    #saldo
    constructor(numeroAgencia, numeroConta, saldo){
        this.#numeroAgencia = numeroAgencia
        this.#numeroConta = numeroConta
        this.#saldo = saldo
    }

    get saldo(){
        return this.#saldo
    }

    set saldo(saldo){
        this.#saldo = saldo
    }

    get numeroConta(){
        return this.#numeroConta
    }

    set numeroConta(numeroConta){
        this.#numeroConta = numeroConta
    }


    get numeroAgencia(){
        return this.#numeroAgencia
    }

    set numeroAgencia(numeroAgencia){
        this.#numeroAgencia = numeroAgencia
    }


    depositar(valor){        
        if(valor > 0){
            this.#saldo = this.#saldo + valor
        }
    }

    sacar(valor){
        if(valor > 0 && valor <= this.#saldo){
            this.#saldo = this.#saldo - valor
        }
    }
}

let minhaConta = new Conta('1234-1', '12345-3', 213.51)

minhaConta.depositar(Math.round(Math.random() * 800))
minhaConta.sacar(Math.round(Math.random() * 900))
console.log(`A sua agência é ${minhaConta.numeroAgencia}, o número da conta é ${minhaConta.numeroConta} e o seu saldo é R$${minhaConta.saldo}`)