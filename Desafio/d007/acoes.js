
function conversor() {

    var res =document.getElementById('res')
   
    var dolar = Number(prompt('Qual a cotação do dolar agora?'))
    var reais = Number(prompt('Qual o valor disponivel você quer trocar por dolar?'))
    var resp =Number (reais/dolar)
   
   res.innerHTML = (`Voce conseguira trocar R$ ${reais.toFixed(2)} por US$ ${resp.toFixed(2)}`)
} 
