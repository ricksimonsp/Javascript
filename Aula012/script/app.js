/*let idade = 75
console.log(`Você tem ${idade} anos!`)
if (idade < 16) {
    console.log('Não vota!')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional!')
} else {
    console.log('Voto obrigatório!')
}

let agora = new Date()
let hora = agora.getHours()
console.log (`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}
*/

let agora = new Date()
let diaSem = agora.getDay()

console.log(diaSem);

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
}

