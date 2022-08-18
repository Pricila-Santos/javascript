var agora = new Date() // para 
//pegar hora do sistema atual
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora <12) {
    console.log('Bom dia !')
} else if (hora <=18) {
    console.log ('Boa tarde !')
} else ('Boa noite !')