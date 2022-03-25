enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror"
}

type Catalogo = {
  nome: string,
  anoLancamento: number,
  genero: string,
  pontuacao: number
}

let filme: Catalogo = {
  nome: "SPIDER-MAN: NO WAY HOME",
  anoLancamento: 2021,
  genero: "Fantasy/Action",
  pontuacao: 93
}

console.log(`nome: ${filme.nome}, Ano Lançamento: ${filme.anoLancamento}, gênero: ${GENERO.ACAO}, pontuação: ${filme.pontuacao}`)