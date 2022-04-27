class Conta{
    constructor(numeroAgencia, numeroConta, saldo){
        this.numeroAgencia = numeroAgencia
        this.numeroConta = numeroConta
        this.saldo = saldo
    }

    depositar(valor){        
        if(valor > 0){
            this.saldo = this.saldo + valor
        }
    }

    sacar(valor){
        if(valor > 0 && valor <= this.saldo){
            this.saldo = this.saldo - valor
        }
    }

    getSaldo(){
        return this.saldo
    }
}

let minhaConta = new Conta(1324, 14, 300.00)
console.log(minhaConta)
minhaConta.sacar(1200.00)
console.log(minhaConta)
minhaConta.depositar(4400.30)
console.log(minhaConta.getSaldo())

