let txtn = window.document.getElementById('txtn')
let sel = window.document.getElementById('sel')
let res = window.document.getElementById('res')
let lista = []

function isnumero(n){
    if(n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n,l) {
    if(l.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    let num = Number(txtn.value)

    if( isnumero(num) && !inlista(num,lista)) {
        lista.push(num)
        let item = window.document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        sel.appendChild(item)

    } else {
        window.alert('[ERRO] Numero invalido ou já encontrado na lista.')
    }
    res.innerHTML = ''
    txtn.value = ''
    txtn.focus()
}   

function finalizar() {
    if(lista.length == 0) {
        window.alert('[ERRO] Adicione valores antes de finalizar.')
    } else {
        let maior = lista[0]
        let menor = lista[0]
        let soma = 0

        for(pos in lista) {
            soma+= lista[pos]
            if(lista[pos] > maior) {
                maior = lista[pos]
            }
            if(lista[pos] < menor) {
                menor = lista[pos]
            }
        }
        res.innerHTML = `<p>Ao todo, temos ${lista.length} números cadastrados.</p>`
        res.innerHTML+= `<p>O maior número informado foi ${maior}.</p>`
        res.innerHTML+= `<p>O menor número informdao foi ${menor}.</p>`
        res.innerHTML+= `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML+= `<p>A média dos valores digitados é ${soma/lista.length}.</p>`
    }
}