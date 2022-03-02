const listaOpcoes = document.querySelector('.opcoes_transacoes')

listaOpcoes.addEventListener('click', e => {
   document.querySelector('.aviso_selecao')
      .classList.remove('show')

   if (e.target.tagName == 'LI') {
      const id = e.target.id

      const secaoEscolha = document.querySelector(`div[data-id="${id}"]`)

      secaoEscolha.classList.add('show')

      for (let i = 1; i <= 4; i++) {
         if (i != id) {
            document.querySelector(`div[data-id="${i}"]`)
            .classList.remove('show')
         } 
      }
   }
})