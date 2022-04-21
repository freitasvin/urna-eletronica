let seuVotoPara = document.querySelector('.d-1-1 span')
let cargo = document.querySelector('.d-1-2 span')
let descricao = document.querySelector(".d-1-4")
let aviso = document.querySelector('.d-2')
let retratos = document.querySelector('.d-1-right')
let numeros = document.querySelector('.d-1-3')

let etapaAtual = 0
let numero = ''



function comecarEtapa(){
    let etapa = etapas[etapaAtual]

    let numerosHtml = ''

    for(let i=0;i<etapa.numeros;i++){
        if (i==0){
            numerosHtml += '<div class="numero pisca"></div>'
        }else{
            numerosHtml += '<div class="numero"></div>'
        }
    }

    seuVotoPara.style.display = 'none'
    cargo.innerHTML = etapa.titulo
    descricao.innerHTML = ''
    aviso.style.display = 'none'
    retratos.innerHTML = ''
    numeros.innerHTML = numerosHtml
}

function atualizaInterface(){
    let etapa = etapas[etapaAtual]
    let candidato = etapa.cand.filter((item) => {
        if(item.numero === numero){
            return true
        }else{
            return false
        }
    })

    if(candidato.length > 0){
        candidato = candidato[0]
        seuVotoPara.style.display = 'block'
        cargo.innerHTML = etapa.titulo
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}<br/>` 
        aviso.style.display = 'none'
        retratos.innerHTML = ''
        numeros.innerHTML = numerosHtml
    }else{
        alert('Candidato não encontrado')
    }

    console.log("Candidato", candidato)
}

function clicou(n) {
    let elementNumero = document.querySelector('.numero.pisca')
    if(elementNumero != null){
        elementNumero.innerHTML = n
        numero = `${numero}${n}`
        
        elementNumero.classList.remove('pisca')

        if(elementNumero.nextElementSibling != null){ 
        elementNumero.nextElementSibling.classList.add('pisca')
        }else{
            atualizaInterface()
        }
        
    }
}

function branco() {
    alert('Clicou em BRANCO!')
}

function limpa(){
    alert('Clicou em LIMPA!')
}
function confirma(){
    alert('Clicou em CONFIRMA!')
}


comecarEtapa()