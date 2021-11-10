function calculo(){
let fatorial = document.getElementById("fatorial").value;
let resultado1 = fatorial;
for (let i = 1; i < fatorial; i++) {
    resultado1 *= i;
}

if (resultado1 >= 1) {
    alert(resultado1)
    resultadoA.innerHTML = resultado1
} else{
    alert("Não foi inserido um número.")
    resultadoA.innerHTML = "Insira um número."
}

}
