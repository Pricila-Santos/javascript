function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // para pegar 4 digitos ex 1985
    var fano =document.getElementById('txtano')
    var resp = document.getElementById( 'resp')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente !')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - (fano.value) 
        var genero =''
        
        if(fsex[0].checked) {
            genero ='Homem' 
            if (idade >=0 && idade < 10) {
                
            } else if (idade < 21) {

              //jovem
            } else if ( idade < 50) {
                //adulto
            } else {
                //idoso
            } 
        
        } else if (fsex[1].checked) {
            genero ='Mulher'
            if ( idade >= 0 && idade < 10) {
                //criança
            } else (idade < 21) {
                //Jovem
            } else (idade < 50) {
                //adulto
            } else {
                //Idoso
            }
    
        
        
        }
        resp.style.textAlign ='center'
        resp.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resp.appendChild('img')
    }




}