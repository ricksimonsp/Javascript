function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO!] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - fano.value
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'images/bebê menino.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'images/homem jovem.png')
            }else if (idade < 60) {
                img.setAttribute('src', 'images/homem adulto.png')
            } else {
                img.setAttribute('src', 'images/homem idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'images/bebê menina.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'images/mulher jovem.png')
            }else if (idade < 60) {
                img.setAttribute('src', 'images/mulher adulta.png')
            } else {
                img.setAttribute('src', 'images/mulher idosa.png')
            }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com idade ${idade} anos.`
    res.appendChild(img)
}

}

