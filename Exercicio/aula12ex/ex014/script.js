function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    
 
    msg.innerHTML= `Agora são ${hora} horas e ${minuto} minutos. `
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#B27234'
    } else if ( hora >= 12 && hora <=18) {
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = "noite.png"
        document.body.style.background = '#0367A6'
    }
}

