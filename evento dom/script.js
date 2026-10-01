const titulo = document.getElementById('titulo')
const paragrafo = document.getElementById('paragrafo')
const caixa = document.getElementById('caixa')
const lista = document.getElementById('lista')
const contador = document.getElementById('contador')

const btntexto =  document.getElementById('btntexto')
const btncor =  document.getElementById('btncor')
const btnfundo =  document.getElementById('btnfundo')
const btndestaque =  document.getElementById('btndestaque')
const btnfonte =  document.getElementById('btnfonte')
const btnadicionar =  document.getElementById('btnadicionar')
const btnremover =  document.getElementById('btnremover')
const btncontador =  document.getElementById('btncontador')

btntexto.addEventListener('click', function(){
    paragrafo.textContent = "Meu nome é Henrique"
})

btncor.addEventListener('click', function(){
    paragrafo.style.color = "green"
})

btnfundo.addEventListener('click', function(){
    paragrafo.style.backgroundColor = "yellow"
})

btndestaque.addEventListener('click', function(){
    caixa.classList.toggle("destaque")
})

btnfonte.addEventListener('click', function(){
    titulo.style.fontSize = "50px"
    titulo.style.cor = "orange"
})

btnadicionar.addEventListener('click', function(){
    const itemnovo = document.createElement("li")
    itemnovo.textContent = "item " + (lista.children.length + 1)
    lista.appendChild(itemnovo)
})

btnremover.addEventListener('click', function(){
    if (lista.lastElementChild) {
        lista.lastElementChild.remove()
    }
})

let cliques = 0
btncontador.addEventListener('click', function(){
    cliques = cliques + 1
    contador.textContent = cliques
})