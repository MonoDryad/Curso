function jogar(){
    var audio = new Audio('aud/video0-online-audio-converter_L0R7wUM.mp3')
audio.addEventListener('canplaythrough', function() {
  audio.play()
})

let menu = document.querySelector('.container-menu')
menu.style.display = "none"

let sper1 = document.querySelector('.pergunta1')
sper1.style.display = "block"
}

function nexta2(){

    let acertou = document.querySelector('.acertou-pergunta')
        acertou.style.display = "none"

    let pper2 = document.querySelector('.pergunta2')
        pper2.style.display = "block"

    var creditoAtual = document.getElementById('creditosSociais').value
        let creditos = parseFloat(creditoAtual) + parseFloat(15)
        document.getElementById('creditosSociais').value = creditos

        
}

function nexta3(){

    let acertou = document.querySelector('.acertou-pergunta')
    acertou.style.display = "none"

let pper3 = document.querySelector('.pergunta3')
    pper3.style.display = "block"

    var creditoAtual = document.getElementById('creditosSociais').value
    let creditos = parseFloat(creditoAtual) + parseFloat(15)
    document.getElementById('creditosSociais').value = creditos
}

function nexta4(){

    let acertou = document.querySelector('.acertou-pergunta')
        acertou.style.display = "none"

    let pper4 = document.querySelector('.pergunta4')
        pper4.style.display = "block"

    var creditoAtual = document.getElementById('creditosSociais').value
        let creditos = parseFloat(creditoAtual) + parseFloat(15)
        document.getElementById('creditosSociais').value = creditos
}

function resultadoA(){

    let acertou = document.querySelector('.acertou-pergunta')
        acertou.style.display = "none"

    let creditosS = document.querySelector('.pcreditos')
        creditosS.style.display = "none"

    let pper5 = document.querySelector('.labelResultadoA')
        pper5.style.display = "block"

    let r = document.querySelector('.labelResultadoAb')
        r.style.display = "block"

    let social = document.querySelector('.social')
        social.style.top = "15%"

    var creditoAtual = document.getElementById('creditosSociais').value
        let creditos = parseFloat(creditoAtual) + parseFloat(15)
        document.getElementById('creditosSociais').value = creditos
}

function nextf2(){
    let acertou = document.querySelector('.errou-feio-pergunta')
        acertou.style.display = "none"

        var creditoAtual = document.getElementById('creditosSociais').value
        let creditos = parseFloat(creditoAtual) - parseFloat(35)
        document.getElementById('creditosSociais').value = creditos

    let pper2 = document.querySelector('.pergunta2')
        pper2.style.display = "block"


}

function nextf3(){
    let acertou = document.querySelector('.errou-feio-pergunta')
        acertou.style.display = "none"

    let pper2 = document.querySelector('.pergunta3')
        pper2.style.display = "block"

        var creditoAtual = document.getElementById('creditosSociais').value
        let creditos = parseFloat(creditoAtual) - parseFloat(35)
        document.getElementById('creditosSociais').value = creditos

}

function nextf4(){
    let acertou = document.querySelector('.errou-feio-pergunta')
        acertou.style.display = "none"

    let pper2 = document.querySelector('.pergunta4')
        pper2.style.display = "block"

        var creditoAtual = document.getElementById('creditosSociais').value
        let creditos = parseFloat(creditoAtual) - parseFloat(35)
        document.getElementById('creditosSociais').value = creditos

}

function nexte2(){
    let acertou = document.querySelector('.errou-pergunta')
        acertou.style.display = "none"

    let pper2 = document.querySelector('.pergunta2')
        pper2.style.display = "block"

        var creditoAtual = document.getElementById('creditosSociais').value
        let creditos = parseFloat(creditoAtual) - parseFloat(15)
        document.getElementById('creditosSociais').value = creditos

}

function nexte3(){
    let acertou = document.querySelector('.errou-pergunta')
        acertou.style.display = "none"

    let pper2 = document.querySelector('.pergunta3')
        pper2.style.display = "block"

        var creditoAtual = document.getElementById('creditosSociais').value
        let creditos = parseFloat(creditoAtual) - parseFloat(15)
        document.getElementById('creditosSociais').value = creditos
}

function nexte4(){
    let acertou = document.querySelector('.errou-pergunta')
        acertou.style.display = "none"

    let pper2 = document.querySelector('.pergunta4')
        pper2.style.display = "block"

        var creditoAtual = document.getElementById('creditosSociais').value
        let creditos = parseFloat(creditoAtual) - parseFloat(15)
        document.getElementById('creditosSociais').value = creditos
}

function nextfailm(){

    let acertou = document.querySelector('.errou-muito-feio-pergunta')
        acertou.style.display = "none"

    let creditosS = document.querySelector('.pcreditos')
        creditosS.style.display = "none"

    let pper5 = document.querySelector('.labelResultadoB')
        pper5.style.display = "block"

    let resul = document.querySelector('.labelResultadoBa')
        resul.style.display = "block"

    let prox = document.querySelector('.fim2')
        prox.style.display = "block"

    let social = document.querySelector('.social')
        social.style.top = "15%"

        let creditos = -999999999999
        document.getElementById('creditosSociais').value = creditos
}

function puma(){
    var audio = new Audio('aud/correto.mp3')
    var audio2 = new Audio('aud/crowd-applause-cheer-small-group_tUQjCQt.mp3')
audio.addEventListener('canplaythrough', function() {
  audio.play()
  audio2.play()
})
let sper1 = document.querySelector('.pergunta1')
sper1.style.display = "none"

let acertou = document.querySelector('.acertou-pergunta')
acertou.style.display = "block"

let acertoubtn = document.querySelector('.btnNextaP2')
acertoubtn.style.display = "block"
}

function pumb(){
    var audio = new Audio('aud/errado.mp3')
    var audio2 = new Audio('aud/Boo_sound_effect_160k.mp3')
audio.addEventListener('canplaythrough', function() {
  audio.play()
  audio2.play()
})
let sper1 = document.querySelector('.pergunta1')
sper1.style.display = "none"

let errou = document.querySelector('.errou-pergunta')
errou.style.display = "block"

let acertoubtn = document.querySelector('.btnNexteP2')
acertoubtn.style.display = "block"
}

function pumc(){
    var audio = new Audio('aud/errado.mp3')
    var audio2 = new Audio('aud/Boo_sound_effect_160k.mp3')
audio.addEventListener('canplaythrough', function() {
  audio.play()
  audio2.play()
})
let sper1 = document.querySelector('.pergunta1')
sper1.style.display = "none"

let errou = document.querySelector('.errou-pergunta')
errou.style.display = "block"

let acertoubtn = document.querySelector('.btnNexteP2')
acertoubtn.style.display = "block"
}

function pumd(){
    var audio = new Audio('aud/errado.mp3')
    var audio2 = new Audio('aud/Boo_sound_effect_160k.mp3')
audio.addEventListener('canplaythrough', function() {
  audio.play()
  audio2.play()
})
let sper1 = document.querySelector('.pergunta1')
sper1.style.display = "none"

let errou = document.querySelector('.errou-pergunta')
errou.style.display = "block"

let acertoubtn = document.querySelector('.btnNexteP2')
acertoubtn.style.display = "block"
}

function pume(){
    var audio = new Audio('aud/errado.mp3')
    var audio2 = new Audio('aud/Boo_sound_effect_160k.mp3')
    var audio3 = new Audio('aud/Hell_s_Kitchen_Dramatic_Sound_Waterphone_-_Sound_Effect_HD_160k.mp3')
audio.addEventListener('canplaythrough', function() {
  audio.play()
  audio2.play()
  audio3.play()
})
let sper1 = document.querySelector('.pergunta1')
sper1.style.display = "none"

let errou = document.querySelector('.errou-feio-pergunta')
errou.style.display = "block"

let acertoubtn = document.querySelector('.btnNextfP2')
acertoubtn.style.display = "block"
}

function pdoa(){
    var audio = new Audio('aud/correto.mp3')
    var audio2 = new Audio('aud/crowd-applause-cheer-small-group_tUQjCQt.mp3')
audio.addEventListener('canplaythrough', function() {
  audio.play()
  audio2.play()
})
let sper1 = document.querySelector('.pergunta2')
sper1.style.display = "none"

let acertou = document.querySelector('.acertou-pergunta')
acertou.style.display = "block"

let acertoubtn = document.querySelector('.btnNextaP3')
acertoubtn.style.display = "block"
}

function pdob(){
    var audio = new Audio('aud/errado.mp3')
    var audio2 = new Audio('aud/Boo_sound_effect_160k.mp3')
    var audio3 = new Audio('aud/Hell_s_Kitchen_Dramatic_Sound_Waterphone_-_Sound_Effect_HD_160k.mp3')
    var audio4 = new Audio('aud/dam4rqxu2ywicjk1.mp3')
audio.addEventListener('canplaythrough', function() {
  audio.play()
  audio2.play()
  audio3.play()
  audio4.play()
})
let sper1 = document.querySelector('.pergunta2')
sper1.style.display = "none"

let mostrar = document.querySelector('.corpo-fim-perguntas')
mostrar.style.display = "block"

let errou = document.querySelector('.errou-muito-feio-pergunta')
errou.style.display = "block"

let acertoubtn = document.querySelector('.btnNextmP2')
acertoubtn.style.display = "block"
}

function ptra(){
    var audio = new Audio('aud/errado.mp3')
    var audio2 = new Audio('aud/Boo_sound_effect_160k.mp3')
    var audio3 = new Audio('aud/Hell_s_Kitchen_Dramatic_Sound_Waterphone_-_Sound_Effect_HD_160k.mp3')
    var audio4 = new Audio('aud/dam4rqxu2ywicjk1.mp3')
audio.addEventListener('canplaythrough', function() {
  audio.play()
  audio2.play()
  audio3.play()
  audio4.play()
})
let sper1 = document.querySelector('.pergunta3')
sper1.style.display = "none"

let errou = document.querySelector('.errou-feio-pergunta')
errou.style.display = "block"

let acertoubtn = document.querySelector('.btnNextfP4')
acertoubtn.style.display = "block"
}

function ptrb(){
    var audio = new Audio('aud/errado.mp3')
    var audio2 = new Audio('aud/Boo_sound_effect_160k.mp3')
audio.addEventListener('canplaythrough', function() {
  audio.play()
  audio2.play()
})
let sper1 = document.querySelector('.pergunta3')
sper1.style.display = "none"

let errou = document.querySelector('.errou-pergunta')
errou.style.display = "block"

let acertoubtn = document.querySelector('.btnNexteP4')
acertoubtn.style.display = "block"
}

function ptrc(){
    var audio = new Audio('aud/errado.mp3')
    var audio2 = new Audio('aud/Boo_sound_effect_160k.mp3')
audio.addEventListener('canplaythrough', function() {
  audio.play()
  audio2.play()
})
let sper1 = document.querySelector('.pergunta3')
sper1.style.display = "none"

let errou = document.querySelector('.errou-pergunta')
errou.style.display = "block"

let acertoubtn = document.querySelector('.btnNexteP4')
acertoubtn.style.display = "block"
}


function ptrd(){
    var audio = new Audio('aud/errado.mp3')
    var audio2 = new Audio('aud/Boo_sound_effect_160k.mp3')
audio.addEventListener('canplaythrough', function() {
  audio.play()
  audio2.play()
})
let sper1 = document.querySelector('.pergunta3')
sper1.style.display = "none"

let errou = document.querySelector('.errou-pergunta')
errou.style.display = "block"

let acertoubtn = document.querySelector('.btnNexteP4')
acertoubtn.style.display = "block"
}

function ptre(){
    var audio = new Audio('aud/correto.mp3')
    var audio2 = new Audio('aud/crowd-applause-cheer-small-group_tUQjCQt.mp3')
audio.addEventListener('canplaythrough', function() {
  audio.play()
  audio2.play()
})
let sper1 = document.querySelector('.pergunta3')
sper1.style.display = "none"

let errou = document.querySelector('.acertou-pergunta')
errou.style.display = "block"

let acertoubtn = document.querySelector('.btnNextaP4')
acertoubtn.style.display = "block"
}

function pqua(){
    var audio = new Audio('aud/errado.mp3')
    var audio2 = new Audio('aud/Boo_sound_effect_160k.mp3')
    var audio3 = new Audio('aud/Hell_s_Kitchen_Dramatic_Sound_Waterphone_-_Sound_Effect_HD_160k.mp3')
    var audio4 = new Audio('aud/dam4rqxu2ywicjk1.mp3')
audio.addEventListener('canplaythrough', function() {
  audio.play()
  audio2.play()
  audio3.play()
  audio4.play()
})
let sper1 = document.querySelector('.pergunta4')
sper1.style.display = "none"

let errou = document.querySelector('.errou-muito-feio-pergunta')
errou.style.display = "block"

let acertoubtn = document.querySelector('.btnNextmP2')
acertoubtn.style.display = "block"
}

function pqub(){
    var audio = new Audio('aud/correto.mp3')
    var audio2 = new Audio('aud/crowd-applause-cheer-small-group_tUQjCQt.mp3')
audio.addEventListener('canplaythrough', function() {
  audio.play()
  audio2.play()
})
let sper1 = document.querySelector('.pergunta4')
sper1.style.display = "none"

let errou = document.querySelector('.acertou-pergunta')
errou.style.display = "block"

let acertoubtn = document.querySelector('.btnNextaP5')
acertoubtn.style.display = "block"
}

function proximoFim() {
    let creditos = document.getElementById('creditosSociais').value
    if(creditos >= -6){

    var creditoAtual = document.getElementById('creditosSociais').value
    let creditos = parseFloat(creditoAtual) + parseFloat(15)
        document.getElementById('creditosSociais').value = creditos

    let fim = document.querySelector('.proximo-fim')
        fim.style.display = "block"

    let tirarc = document.querySelector('.labelResultadoA')
        tirarc.style.display = "block"

        let tirarb = document.querySelector('.fimTexto')
        tirarb.style.display = "none"

    let acertou = document.querySelector('.acertou-pergunta')
        acertou.style.display = "none"

    let creditosS = document.querySelector('.pcreditos')
        creditosS.style.display = "none"

    let r = document.querySelector('.labelResultadoAb')
        r.style.display = "block"

    let social = document.querySelector('.social')
        social.style.top = "15%"

    }else if(creditos <= -15) {
    
    let fim = document.querySelector('.proximo-fim')
        fim.style.display = "block"

    let acertou = document.querySelector('.errou-muito-feio-pergunta')
        acertou.style.display = "none"

    let creditosS = document.querySelector('.pcreditos')
        creditosS.style.display = "none"

    let pper5 = document.querySelector('.labelResultadoB')
        pper5.style.display = "none"

    let resul = document.querySelector('.labelResultadoBa')
        resul.style.display = "none"

    let prox = document.querySelector('.fim2')
        prox.style.display = "none"

    let social = document.querySelector('.social')
        social.style.top = "15%"

        let creditos = -999999999999
        document.getElementById('creditosSociais').value = creditos
    }
}

function fim2() {
    let menu = document.querySelector('.container-menu')
        menu.style.display = "block"

    let sper1 = document.querySelector('.pergunta1')
        sper1.style.display = "none"

    let fim = document.querySelector('.proximo-fim')
        fim.style.display = "none"

    let social = document.querySelector('.social')
        social.style.top = "90%"

        let socialT = document.querySelector('.pcreditos')
        socialT.style.display = "block"
        
    let creditos = 0
        document.getElementById('creditosSociais').value = creditos
}