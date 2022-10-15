var area = window.document.getElementById('area')
area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)

function clicar() {
   
    area.innerText = 'Clicou!'
    area.style.background = 'green'
}

function entrar() {
    area.innerText = 'Entrou!'
}

function sair() {
    area.innerText = 'Saiu!'
    area.style.background = 'brown'
}
