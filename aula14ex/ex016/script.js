function contar() {
    var inicio = window.document.getElementById('txt1')
    var fim = window.document.getElementById('txt2')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length  == 0) {
        window.alert ('[ERRO] Preencha os dados corretamente')
        res.innerHTML = 'Impossivel contar'
    } else{
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        res.innerHTML = 'Contando:<br>'

        if(p == 0) {
            window.alert('[ERRO] Considerando passo 1')
            p = 1
        }
        
       if(i < f) {
            //contagem crescente
            for(var c = i; c <= f; c+= p) {
            res.innerHTML+= ` ${c} \u{1F601}`
            }
       } else {
            //contagem regressiva
            for(var c = i; c >= f; c-= p) {
            res.innerHTML+= ` ${c} \u{1F601}`
            }
       }
        res.innerHTML+= `\u{1f3c1}`
    }
}