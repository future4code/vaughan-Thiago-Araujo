// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
 function soma(num1, num2) {
  
 return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  
const mensagem = prompt('Digite uma mensagem!')

console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
 function calculaAreaRetangulo(){
  
 const altura = Number(prompt(" altura"));
  const largura = Number(prompt(" largura"));

 console.log( altura * largura)

}



// EXERCÍCIO 02
  function imprimeIdade() {
  
    const anoAtual = Number(prompt(" ano atual"))
    const anoNascimento = Number(prompt(" ano de nascimento"))
    
    console.log(anoAtual - anoNascimento)

 }
 
// // EXERCÍCIO 03
 function calculaIMC(peso, altura) {
  
  const resultado = (peso / (altura * altura)).toFixed(1)
  
  return resultado
}

// // EXERCÍCIO 04
 function imprimeInformacoesUsuario() {

const nome = prompt("Digite seu nome")
const idade = prompt("Digite sua idade")
const email = prompt("Digite seu email")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`) 
}
 
// // EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Insira sua primeira cor favorita")
  const cor2 = prompt("Insira sua segunda cor favorita")
  const cor3 = prompt("Insira sua terceira cor favorita")
  console.log([cor1, cor2, cor3])
}

// // EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}
 

 
// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {

  return custo / valorIngresso
}
 
// // EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}
 
// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]
}

 
// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiro = retornaPrimeiroElemento(array)
  const ultimo = retornaUltimoElemento(array)

  array[0] = ultimo
  array[array.length - 1] = primeiro

  return array
}
 
// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase()
}
 
// EXERCÍCIO 13
function checaRenovacaoRG() {

  const anoAtual = Number(prompt("Digite o ano atual"))
  const anoNascimento = Number(prompt("Digite o ano de nascimento"))
  const anoEmissao = Number(prompt("Digite o ano de emissão do documento"))

  const idade = anoAtual - anoNascimento
  const tempoCarteira = anoAtual - anoEmissao

  const cond1 = idade <= 20 && tempoCarteira >= 5
  const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
  const cond3 = idade > 50 && tempoCarteira >= 15

  console.log(cond1 || cond2 || cond3)
}
 
// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const cond1 = ano % 400 === 0
  const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
  return cond1 || cond2
}
 
// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const maiorDeIdade = prompt("Você tem mais de 18 anos?")
  const ensinoMedio = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  console.log(maiorDeIdade === "sim" && ensinoMedio === "sim" && disponibilidade === "sim")
}