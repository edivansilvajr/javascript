let num = [5,8,2,9,3,] //declarou o array
num.sort()             //para colocar em ordem crescente
num.push(1)             //para criar uma posição no final do array e acrescentar o número 1
console.log(num)        //para escrever o array ja em ordem e com o acerscimo do 1 no final
console.log (`O vetor tem ${num.length} posições`)  //para mostrar a quantidade de posições
console.log (`O primeiro valor do vetor é ${num[0]} `)  //para mostrar o conteúdo da posição
let pos = num.indexOf(5) //procura o conteudo requerido e retorna o numero da chave em que ele se encontra
console.log (`O valor 5 encontra-se na posição ${pos}`)