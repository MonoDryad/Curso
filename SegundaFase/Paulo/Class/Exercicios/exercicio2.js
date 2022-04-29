class Cliente{
    constructor(nome, email, whatsapp, twitter){
        this.nome = nome
        this.email = email
        this.whatsapp = whatsapp
        this.twitter = twitter
    }

    toString(){
        return `\nSeu nome é ${this.nome}, com o e-mail ${this.email}; \nsuas redes sociais são: \ntwitter - ${this.twitter} \nwhatsapp - ${this.whatsapp}\n----\n`
    }

    changeEmail(novoEmail){
        this.email = novoEmail
    }

    changeTwitter(novoTwitter){
        this.twitter = novoTwitter
    }
}

let clienteMeu = []
for(i=0;i<10;i++){
    clienteMeu.push(new Cliente(`reginaldo${i+1}`, 'reginaldo@gmail.com', '98325-3292', '@gervan'))
}
console.log(clienteMeu)