let num = [5,8,2,9,3]
num.push(1) //acrescente o numero indicado
num.sort() //coloca em ordem crescente
console.log(num)
console.log( `O vetor tem ${num.length} posicões.`) //num.length conta quantas posiçoes tem 
console.log(num[0]) //dessa forma ele indica quem esta na posição 0 ,que é o 1 acrescentado com o push
let pos = num.indexOf(10)//esta opção é pra buscar um numero no vetor,se não tiver var ser -1
if (pos ==-1) {
    console.log(`O valor não foi encontrado`)
}
console.log(`O valor esta na posição ${pos}`)

