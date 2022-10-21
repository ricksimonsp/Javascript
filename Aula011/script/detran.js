




function calcular() {
let txtv = window.document.querySelector('input#txtvel')
let res = window.document.querySelector('div#res')
let vel = Number(txtv.value)
res.innerHTML = `<p>Sua Velocidade atual é de <strong>${vel}Km/h</strong></p>`
if (vel > 60) {
    res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade!!</p>`
}

res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}