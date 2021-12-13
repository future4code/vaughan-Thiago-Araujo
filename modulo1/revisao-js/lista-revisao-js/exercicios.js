// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length
}
retornaTamanhoArray("Azul","Amarelo","Vermelho")
console.log(array)

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

console.log(retornaArrayInvertido([0,8,23,16,10,15,41,12,13]))

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b)
}

console.log(retornaArrayOrdenado([36,12,56,7,3]))

// EXERCÍCIO 04
function retornaNumerosPares(array) {

  let par = array.filter(par => (par % 2)== 0)
  return par
}

console.log(retornaNumerosPares([1,2,3,4,5,6,7,8]))
console.log(par);

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let parElevado = array.filter(parElevado => (parElevado % 2 )== 0 )
  return parElevado
}
retornaNumerosParesElevadosADois([1,2,3,4,5,6])
console.log(parElevado)

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
 const maiorNumero = Math.max(...array)
  return maiorNumero

}
retornaMaiorNumero([1,2,3,4,5,6,7])
console.log(maiorNumero)


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
}


retornaObjetoEntreDoisNumeros(15,30)


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}