let res = document.getElementById('res')
function calcular() {
    let produto =prompt('Qual produto você esta comprando ?')
    let valor = Number(prompt(`Qual o preço de ${produto}?`))
    let desc = Number(valor*10/100)
    let valorf = Number(valor-desc)
    res.innerHTML =(`<p>Calculando desconto de 10% para ${produto} !</p>`)
    res.innerHTML+= (`<p>O preço original era ${valor.toLocaleString('pt-br',{style:'currency',currency :'BRL'})}</p>`)
    res.innerHTML+= (`<p>Você acaba de ganhar ${desc.toLocaleString('pt-br',{style:'currency',currency :'BRL'})} de desconto (-10%)</p>`)
    res.innerHTML+= (`<p>No final você vai pagar ${valorf.toLocaleString('pt-br',{style:'currency',currency :'BRL'})} no produto ${produto}.</p>`)

}