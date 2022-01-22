let amigo = {
   nome:'José',
   sexo:'M',
   peso:85.4,
   engordar(p) {
      if(this.peso + p > this.peso) {
         console.log('Engordou')
         this.peso += p
      }
   }
}

amigo.engordar(3)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg.`)