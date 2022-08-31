function converter() {
    let saida = document.getElementById('saida')
    let m =Number(window.prompt('Digite a distancia em metros'))
    let km =Number(m/1000)
    let hm=Number(m/100)
    let dam =Number(m/10)
    let dm = Number(m*10)
    let cm =Number(m*100)
    let mm =Number(m*1000)

    saida.innerHTML = (`<h1>A distancia de ${m} metros,corresponde a ...</h1>
                           <p>${km} quilometros (km)</p>
                           <p>${hm} hectometro (hm)</p>
                           <p>${dam} Decâmetro (dam)</p>
                           <p>${dm} Decímentro (dm)</p>
                           <p>${cm} Centímetro (cm)</p>
                           <p>${mm} Milímetro (mm)</p>         `)
    
}


