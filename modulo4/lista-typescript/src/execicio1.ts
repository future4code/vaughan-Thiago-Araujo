type Exercicio1 = {
  nome: string,
  dia: string,
  mes: string,
  ano: string
}

let pessoa1: Exercicio1 = {
  nome: "Amora",
  dia: "14",
  mes: "05",
  ano: "2021"
}

console.log(`Olá me chamo ${pessoa1.nome}, nasci no dia ${pessoa1.dia} do mês de ${pessoa1.mes} do ano de ${pessoa1.ano}`)