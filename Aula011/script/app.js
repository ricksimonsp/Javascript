function origem() {
    let orig = window.document.querySelector('input#país')
    let situa = window.document.querySelector('div#situa')
    let country = (orig.value)
    situa.innerHTML = `<p>Você está vivendo em <strong>${country}</strong>.</>`
    if (country == 'Brasil') {
        situa.innerHTML += `<p>Portanto você é <strong>Brasileiro!</strong></p>`
        
} else if (country != 'Brasil') {
    situa.innerHTML += `<p>Você é Estrangeiro!</p>`
}

}

