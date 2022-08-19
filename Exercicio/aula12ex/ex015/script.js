function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // para pegar 4 digitos ex 1985
    var fano = document.getElementById('txtano')
    var resp = document.getElementById( 'resp')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente !`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano -(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id','foto')
       
       if (fsex[0].checked) {
        genero = 'Homem'
        if(idade >=0 && idade < 10) {
            img.setAttribute('src','foto-bebe-h.png')
         } else if (idade >=10 && idade < 21) {
            img.setAttribute('src','jovem-h.png')
         } else if (idade < 50) {
            img.setAttribute('src','adulto-h.png')
            } else {
            img.setAttribute('src','idoso-h.png')
         }
       
        } else if (fsex[1].checked) {
        genero = 'Mulher'
            if(idade >=0 && idade < 10) {
            img.setAttribute('src','bebem.png') 
            
         } else if (idade >=10 && idade < 21) {
            img.setAttribute('src','jovem')
         } else if (idade < 50) {
            img.setAttribute('src','adulta-m.png')
         } else {
            img.setAttribute('src','idosa-m.png')
         }
       }
       resp.style.textAlign = 'center'
       resp.innerHTML = `Detectamos ${ genero} com ${idade} anos.`
       resp.appendChild(img)
    }
    



}