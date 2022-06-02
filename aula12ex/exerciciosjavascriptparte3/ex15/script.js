function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById ('txtano')
    var res = window.document.querySelector ('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert ('[ERRO] Verifique os dados e tente novamente !')
    } else {
        var fsex = window.document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute ('id','foto')
        
        if(fsex [0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 12) {
                //criança
                img.setAttribute ('src','foto-bebezinho.png')
              } else if (idade < 21) {
                //jovem
                img.setAttribute ('src','foto-menino.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute ('src','foto-homem.png')
            } else {
                //idoso
                img.setAttribute ('src','foto-idoso.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 12) {
                //criança
                img.setAttribute ('src','foto-bebezinha.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute ('src','foto-menina.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute ('src','foto-mulher.png')
            } else {
                //idoso
                img.setAttribute ('src','foto-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos. `
        res.appendChild(img)
    }
}
