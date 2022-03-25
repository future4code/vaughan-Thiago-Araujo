// Exercício 1 - A - Acontece que a função espera uma string quando atribui um número ela dá erro

// Exercício 1 - B - Somente fazer string || number

// Exercício 1 - C 

type Pessoa = {
  nome: string,
  idade: number,
  corFavorita: string
}

const pessoa1: Pessoa = {
  nome: "Thiago",
  idade: 19,
  corFavorita: "Preto"
}

const pessoa2: Pessoa = {
  nome: "Mayara",
  idade: 23,
  corFavorita: "Rosa"
}

const pessoa3: Pessoa = {
  nome: "Leandro",
  idade: 26,
  corFavorita: "Amarelo"
}

// Exercício 1 - D

enum CoresDoArcoIris {
  VERMELHO = "vermelho",
  LARANJA = "laranja",
  AMARELO = "amarelo",
  VERDE = "verde",
  AZUL = "azul",
  ANIL = "anil",
  VIOLETA = "violeta"
}

const pessoa01 = {
  class: CoresDoArcoIris.VIOLETA
}

const pessoa02 = {
  class: CoresDoArcoIris.AZUL
}

const pessoa03 = {
  class: CoresDoArcoIris.AMARELO
}