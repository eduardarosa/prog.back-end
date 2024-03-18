let n1 = parseInt(document.getElementById('nota_1').value)
let n2 = parseInt(document.getElementById('nota_2').value)

let med = 0
let aprovado = med > 60
let recuperação = med == 50 && med <= 59
let reprovado < 40

function soma(){
let sum = n1 + n2
let med = sum/2
    
if (sum < 60 && sum <= 59){
    prompt('voce esta aprovado')
}
if (sum == 50){
    prompt('voce esta em reprovado')
}
if (sum < 50){
    prompt('voce esta em recuperação')
}
    
}