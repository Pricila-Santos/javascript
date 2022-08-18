
var agora = new Date()
var diasemana = agora.getDay() /* Dia da semana do sistema*/
/*
0=Domingo
1=Segunda
2=Terca
3=Quarta
4=Quinta
5=Sexta
6=Sabado
*/
switch (diasemana) {
    case 0 :
        console.log('Domingo')
        break
    case 1 :
        console.log('Segunda')
        break
    case 2 :
        consolelog('Terça')
        break
    case 3 :
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5 :
        console.log('Sexta')
        break
    case 6 :
        console.log('sabado') 
        default:
        console.log('[ERRO]Dia inválido')

}