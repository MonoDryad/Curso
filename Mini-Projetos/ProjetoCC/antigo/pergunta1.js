function um(){
    var audio = new Audio('aud/correto.mp3')
    var audio2 = new Audio('aud/crowd-applause-cheer-small-group_tUQjCQt.mp3')
audio.addEventListener('canplaythrough', function() {
  audio.play()
  audio2.play()
})
var h1 = document.querySelector('h1')
var p = document.querySelector('.pergunta')
var button = document.querySelector('.btnEscolher')
var button1 = document.querySelector('.btnEscolher1')
var button2 = document.querySelector('.btnEscolher2')
var button3 = document.querySelector('.btnEscolher3')
var button4 = document.querySelector('.btnEscolher4')
var button4 = document.querySelector('.btnEscolher4')
var proximo = document.querySelector('.proximo1')
var acertou = document.querySelector('.acertou')
var acertou1 = document.querySelector('.acertou1')
h1.style.display = "none"
p.style.display = "none"
proximo.style.display = "table-cell"
button.style.display = "none"
button2.style.display = "none"
button3.style.display = "none"
button4.style.display = "none"
button1.style.display = "none"
acertou.style.display = "contents"
acertou1.style.display = "inline"
// acertou1.style.margin = "185px"
}

function dois(){
    var audio = new Audio('aud/errado.mp3')
    var audio1 = new Audio('aud/Boo_sound_effect_160k.mp3')
audio.addEventListener('canplaythrough', function() {
  audio.play()
  audio1.play()
})
var h1 = document.querySelector('h1')
var p = document.querySelector('.pergunta')
var button = document.querySelector('.btnEscolher')
var button1 = document.querySelector('.btnEscolher1')
var button2 = document.querySelector('.btnEscolher2')
var button3 = document.querySelector('.btnEscolher3')
var button4 = document.querySelector('.btnEscolher4')
var button4 = document.querySelector('.btnEscolher4')
var proximo = document.querySelector('.proximo1')
h1.style.display = "none"
p.style.display = "none"
proximo.style.display = "table-cell"
button.style.display = "none"
button2.style.display = "none"
button3.style.display = "none"
button4.style.display = "none"
button1.style.display = "none"
}

function tres(){
    var audio = new Audio('aud/errado.mp3')
    var audio1 = new Audio('aud/Boo_sound_effect_160k.mp3')
audio.addEventListener('canplaythrough', function() {
  audio.play();
  audio1.play()
})
var h1 = document.querySelector('h1')
var p = document.querySelector('.pergunta')
var button = document.querySelector('.btnEscolher')
var button1 = document.querySelector('.btnEscolher1')
var button2 = document.querySelector('.btnEscolher2')
var button3 = document.querySelector('.btnEscolher3')
var button4 = document.querySelector('.btnEscolher4')
var button4 = document.querySelector('.btnEscolher4')
var proximo = document.querySelector('.proximo1')
h1.style.display = "none"
p.style.display = "none"
proximo.style.display = "table-cell"
button.style.display = "none"
button2.style.display = "none"
button3.style.display = "none"
button4.style.display = "none"
button1.style.display = "none"
}

function quatro(){
    var audio = new Audio('aud/errado.mp3')
    var audio1 = new Audio('aud/Boo_sound_effect_160k.mp3')
    var audio2 = new Audio('aud/Hell_s_Kitchen_Dramatic_Sound_Waterphone_-_Sound_Effect_HD_160k.mp3')
audio.addEventListener('canplaythrough', function() {
  audio.play()
  audio1.play()
  audio2.play()
})
var h1 = document.querySelector('h1')
var p = document.querySelector('.pergunta')
var button = document.querySelector('.btnEscolher')
var button1 = document.querySelector('.btnEscolher1')
var button2 = document.querySelector('.btnEscolher2')
var button3 = document.querySelector('.btnEscolher3')
var button4 = document.querySelector('.btnEscolher4')
var button4 = document.querySelector('.btnEscolher4')
var proximo = document.querySelector('.proximo2')
h1.style.display = "none"
p.style.display = "none"
proximo.style.display = "table-cell"
button.style.display = "none"
button2.style.display = "none"
button3.style.display = "none"
button4.style.display = "none"
button1.style.display = "none"
}

function zero(){
    var audio = new Audio('aud/errado.mp3')
    var audio1 = new Audio('aud/Boo_sound_effect_160k.mp3')
audio.addEventListener('canplaythrough', function() {
  audio.play()
  audio1.play()
})
var h1 = document.querySelector('h1')
var p = document.querySelector('.pergunta')
var button = document.querySelector('.btnEscolher')
var button1 = document.querySelector('.btnEscolher1')
var button2 = document.querySelector('.btnEscolher2')
var button3 = document.querySelector('.btnEscolher3')
var button4 = document.querySelector('.btnEscolher4')
var button4 = document.querySelector('.btnEscolher4')
var proximo = document.querySelector('.proximo1')
h1.style.display = "none"
p.style.display = "none"
proximo.style.display = "table-cell"
button.style.display = "none"
button2.style.display = "none"
button3.style.display = "none"
button4.style.display = "none"
button1.style.display = "none"
}

function proximo1(){
    window.location.href = "pergunta2.html"
}

function proximo2(){
    window.location.href = "errado/perdao.html"
}