function carregar() {
let msg = window.document.getElementById('msg')
let img = window.document.getElementById('imagem')
let data = new Date()
let hora = data.getHours()
/*let hora = 19*/
msg.innerHTML = `<p style= "text-align: center;">Agora são ${hora} horas.</p>`
if (hora >= 0 && hora < 12) {
    img.src = 'images/01.png'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora <= 18) {
    img.src = 'images/02.png'
    document.body.style.background = '#b9846f'
} else {
    img.src = 'images/03.png'
    document.body.style.background = '#515154'
}

}