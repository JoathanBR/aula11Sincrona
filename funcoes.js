function raizQuadrada(){
    let numeroRaiz = document.getElementById('numeroRaiz').value
    let valorRaiz = Number(numeroRaiz)

    var raiz = Math.sqrt(valorRaiz)
    if(Number.isInteger(raiz)){
        document.getElementById('mostrarRaiz').innerHTML = "<h3>A raiz quadrade de " + valorRaiz + " é = " + raiz + " </h3>"

    }
    else if(isNaN(raiz) || raiz == "" ){
        alert("Digite um número válido")
        document.getElementById('numeroRaiz').focus()
        return 

    }
    else
        document.getElementById('mostrarRaiz').innerHTML = "<h3>Não há raiz exata para " + valorRaiz + " </h3>"
}

let verificarRaiz = document.getElementById('verificarRaiz')
verificarRaiz.addEventListener('click', raizQuadrada)

//-----------------------

function parImpar(){
    var numero = document.getElementById('numero').value

    if(numero%2 == 0){
        document.getElementById('mostrarParOrImpar').innerHTML = "<h3>Resposta: " + numero + " é par</h3>"
    }
    else if(isNaN(numero) || numero == "" ){
        alert("Digite um número válido")
        document.getElementById('numero').focus()
        return 
    }
    else
        document.getElementById('mostrarParOrImpar').innerHTML = "<h3>Resposta: " + numero + " é ímpar</h3>"
}

var mostrarParOrImpar = document.getElementById('parOrImpar')
mostrarParOrImpar.addEventListener('click', parImpar)

//-----------------------
function velocidade(){
    var velPermitida = document.getElementById('velPermitida').value
    var velCondutor = document.getElementById('velCondutor').value

    let vP = Number(velPermitida)
    let vC = Number(velCondutor)

    var calculo = (vP * 0.2) + (vP)

    if(vC <= vP){
        document.getElementById('mostrarVel').innerHTML = "<h3>Situação: Sem Multa</h3>"

    }
    else if(vC <= calculo){
        document.getElementById('mostrarVel').innerHTML = "<h3>Situação: Multa Leve</h3>"

    }
    else if(vC > calculo){
        document.getElementById('mostrarVel').innerHTML = "<h3>Situação: Multa Grave</h3>"

    }
    else if(isNaN(vP) || vP == 0 || isNaN(vC) || vC == 0){
        alert("Digite um número válido")
        return 
    }
    else
        document.getElementById('mostrarVel').innerHTML = "<h3>Ocorreu algum problema</h3>"
}

var verificarVel = document.getElementById('verificarVel')
verificarVel.addEventListener('click', velocidade)
//-----------------------

function parquimetro(){
    let valorParq = document.getElementById('valorParq').value
    let vParq = Number(valorParq)
    let trocoA = vParq - 1.00
    let trocoB = vParq - 1.75
    let trocoC = vParq - 3.00

    if(vParq >= 3.00){
        document.getElementById('mostrarParq').innerHTML = "<h3>Tempo: 120 min<br>Troco R$: " + trocoC.toFixed(2) + "</h3>"
    }
    else if(vParq >= 1.70){
        document.getElementById('mostrarParq').innerHTML = "<h3>Tempo: 60 min<br>Troco R$: " + trocoB.toFixed(2) + "</h3>"
    }
    else if(vParq >= 1.00){
        document.getElementById('mostrarParq').innerHTML = "<h3>Tempo: 30 min<br>Troco R$: " + trocoA.toFixed(2) + "</h3>"
    }
    else if(isNaN(vParq) || vParq == "" ){
        alert("Digite um número válido")
        document.getElementById('vParq').focus()
        return 
    }
    else
        document.getElementById('mostrarParq').innerHTML = "<h3>Valor Insuficiente</h3>"
}

var mostrarParOrImpar = document.getElementById('verificarParq')
verificarParq.addEventListener('click', parquimetro)

//-----------------------
function ladosTriangulo(){
    var valorA = document.getElementById('a').value
    var valorB = document.getElementById('b').value
    var valorC = document.getElementById('c').value

    let a = Number(valorA)
    let b = Number(valorB)
    let c = Number(valorC)

    let somaBC = b + c
    let somaAC = a + c
    let somaAB = a + b

    console.log(a, b, c)
    if(a <= somaBC){
        if(b <= somaAC){
            if(c <= somaAB){
                if(a == b && b == c && c == a){
                    document.getElementById('mostrarLados').innerHTML = "<h3>Lados podem formar um triângulo<br>Tipo: Equilátero</h3>"
                }
                else if(a != b && a != c && c != b){
                    document.getElementById('mostrarLados').innerHTML = "<h3>Lados podem formar um triângulo<br>Tipo: Escaleno</h3>"
                }
                else
                document.getElementById('mostrarLados').innerHTML = "<h3>Lados podem formar um triângulo<br>Tipo: Isósceles</h3>"
    }
        else
            document.getElementById('mostrarLados').innerHTML = "<h3>Não pode formar uma triângulo</h3>"
    }
        else
            document.getElementById('mostrarLados').innerHTML = "<h3>Não pode formar uma triângulo</h3>"   
    }
    else if(isNaN(a) || a == 0 || isNaN(b) || b == 0 || isNaN(c) || c == 0){
        alert("Digite um número válido")
        return 
    }
    else
        document.getElementById('mostrarLados').innerHTML = "<h3>Não pode formar uma triângulo</h3>"
}

var verificarLados = document.getElementById('verificarLados')
verificarLados.addEventListener('click', ladosTriangulo)

//----------
function caixaEletronico() {
    var valor = document.getElementById('valorSaque').value

    let nota100 = 100
    let nota50  = 50 
    let nota10  = 10
    

    if ( valor >= nota100){
        nota100 = valor / 100
        valor = valor % 100;
    }
    if ( valor >= nota50){
        nota50 = valor / 50
        valor = valor % 50
    }
    if ( valor >= nota10){
        nota10 = valor / 10
        valor = valor % 10
    }


    if (valor >= 1) {
        alert("Valor indiposnivel para as notas disponíveis (R$10, R$50, 100)" )
        return
    } else {
        document.getElementById('mostrarNotasSaque').innerHTML = "<h3>" + "Notas de R$ 100: " + Math.trunc(nota100) + "<br>"
        + "Notas de R$ 50: " + Math.trunc(nota50) + "<br>"
        + "Notas de R$ 10: " + Math.trunc(nota10) + "<br>" + "</h3>"

    }


}

var verificarNotasSaque = document.getElementById('verificarNotasSaque')
verificarNotasSaque.addEventListener('click', caixaEletronico)

function numDecrecente () {
    var num = document.getElementById('numeroDecrecente').value

    var listDecrecente = "Entre " + num + " e 1: "

    for (num; num > 0; num--) {
        listDecrecente += num + ", "
        
    }

    document.getElementById('listaDecrecente').innerHTML = " <h3> " + listDecrecente + " </h3>"
}

var decrecer = document.getElementById('decrecer')
decrecer.addEventListener('click', numDecrecente)

function criacaoChinchilas () {
    var numChinchilas = document.getElementById('numeroChinchilas').value
    var anos = document.getElementById('nAnos').value

    let result = ""

    if (numChinchilas < 2){
        alert("Numero de chinchilas deve ser maior que 2" )
        return
    }else {
        for (var i = 1; i <=  anos; i++){
            result += i + "º Ano:" + numChinchilas + " Chinchilas <br>"
            numChinchilas = numChinchilas * 3
        }
    
        document.getElementById('listaChinchilas').innerHTML=result
    }
}

var criarChinchilas = document.getElementById('bttChinchilas')
criarChinchilas.addEventListener('click', criacaoChinchilas)

function numeroPerfeito () {
    var num = document.getElementById('numeroP').value 

    let result = "Divisores do " + num + ": 1, "
    let soma = 1

    for (var i=2; i < num; i++) {
        if (num%i == 0){
            soma +=  i
            result += i + ", "
        }
    }
    if (soma==num) {
        document.getElementById('listaNumeroP').innerHTML= "<h3>" + result 
        + "(Soma: " + soma + ") <br>" + num + " É um numero Perfeito </h3>"
    } else {
        document.getElementById('listaNumeroP').innerHTML= "<h3>" + result 
        + "(Soma: " + soma + ") <br>" + num + " Não é um numero Perfeito </h3>"
    }
}

var numPerfeito = document.getElementById('bttNumeroP')
numPerfeito.addEventListener('click', numeroPerfeito)

function criarEstrelas () {
    var numLinha = document.getElementById('numeroLinhas').value
    let estrela = '*'
    let result = ""
    let cont = 0

    for (numLinha; numLinha > 0; numLinha--){
        cont++
        result += estrela.repeat(cont) + "<br>"
    }

    document.getElementById('listaEstrelas').innerHTML= result
}

var fabricaEstrelas = document.getElementById('bttEstrelas')
fabricaEstrelas.addEventListener('click', criarEstrelas)