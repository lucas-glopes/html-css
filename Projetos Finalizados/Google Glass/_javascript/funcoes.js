function mudaFoto (fonte) {
    document.getElementById('oculos').src = fonte
}

function calculo() {
    var qtd = parseInt(document.getElementById('quantidade').value)
    tot = qtd * 1500
    document.getElementById('preco').value = tot + ",00"
}

function fotoG() {
    var div=document.getElementById('grande')
    var foto=document.createElement('img')
    foto.setAttribute('src','../_imagens/galeria-01.jpg')
    div.appendChild(foto)
}
