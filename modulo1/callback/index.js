// Exercícios de interpretação 1

// Iria aparecer os apelidos e os nomes
// apelido: Mandi , nome: Amanda Rangel
// apelido: Laura , nome: Laís Petra
// apelido: Chijo , nome: Letícia Chijo

// Exercícios de interpretação 2

// Iria aparacer somente os nomes: Amanda Rangel, Laís Petra, Letícia Chijo

// Exercícios de interpretação 3

// Iria filtrar o apelido Chijo da lista deixando somente o:
// nome: Amanda Rangel, apelido: Mandi
// nome: Laís Petra, apelido: Laura

// Exercícios de escrita 1
//
// const pets = [
//   { nome: "Lupin", raca: "Salsicha"},
//   { nome: "Polly", raca: "Lhasa Apso"},
//   { nome: "Madame", raca: "Poodle"},
//   { nome: "Quentinho", raca: "Salsicha"},
//   { nome: "Fluffy", raca: "Poodle"},
//   { nome: "Caramelo", raca: "Vira-lata"},
// ]
// 
// const nomeDoPets = pets.map((item, indice, array) => {
//   return item.nome
// })
// console.log(nomeDoPets)
// 
// const cachorroSalsicha = pets.filter((nome, indice, array) => {
//   return nome.raca === "Salsicha"
// })
// console.log(cachorroSalsicha)
// 
// const poodle = pets.filter((pet) => pet.raca === "Poodle")
// const mensagem = poodle.map((poodle) => `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome}`)
// console.log(mensagem)

// Exercícios de escrita 2

// const produtos = [
//  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]

// const nomeDosProdutos = produtos.map((item, indice, array) => {
//  return item.nome
// })
// console.log(nomeDosProdutos)
//
// const produtosComDesconto = produtos.map((item, indece, array) => {
//  const percentual = 0.05
//  const valorDoProdutoComDesconto = item.preco * (1 - percentual)
//  return valorDoProdutoComDesconto.toFixed(2)
// })
//
// console.log(produtosComDesconto)
//
// const produtosBebidas = produtos.filter((item, indice, array) => {
//  return item.categoria === "Bebidas"
// })
// console.log(produtosBebidas)
//
// const ype = produtos.filter((item, indice, array) => {
// return item.nome.includes("Ypê")
// })
// console.log(ype)
//
// ype.map((item, index, array) => {
//  console.log(array)
//  console.log(`Compre ${item.nome} por ${item.preco}`)  
// })

// Desafio 1
// 
// const pokemons = [
//   { nome: "Bulbasaur", tipo: "grama" },
//   { nome: "Bellsprout", tipo: "grama" },
//   { nome: "Charmander", tipo: "fogo" },
//   { nome: "Vulpix", tipo: "fogo" },
//   { nome: "Squirtle", tipo: "água" },
//   { nome: "Psyduck", tipo: "água" },
// ]
// 
//  const pokemonNome = pokemons.map((item, indice, array) => {
//    return item.nome
// })
// console.log(pokemonNome.sort())