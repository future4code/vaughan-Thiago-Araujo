// console.log("Olá mundo")

// Exercícios de interpretação 1

// Vai ser impresso: Matheus Nachtergaele, Virginia Cavendish e Globo 14h 

// Exercícios de interpretação 2

// A) Vai ser impresso:
// nome: Juca, idade: 3, raça: SRD
// nome: Juba, idade: 3, raça: SRD
// nome: Jubo, idade: 3, raça: SRD

// B) Serve basicamente para você dizer que podem ser passados diversos parametros naquela função.

// Exercícios de interpretação 3

// A) Vai ser impresso: false e undefined

// B) Porque não foi atribuido nenhum valor a altura 

// Exercícios de escrita 1

// const pessoa = {
// 
//   nome : "Thiago",
//   apelidos: ["Thi ", "Tato ", "Th "],
// 
// }
//
// const novosApelidos = {
//
//  novosApelidos: [" Senhor"," Lorde", " M45TER"]
// }
// 
// console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${novosApelidos.novosApelidos}`)

// Exercícios de escrita 2

// const nomeUm = {
// 
//   nome: "Leando",
//   idade: 25,
//   profissao: "Cantor"
// 
// }
// 
// const nomeDois = {
// 
//   nome: "José",
//   idade: 24,
//   profissao: "Cantor"
// 
// }
// 
// console.log(`${nomeUm.nome}, ${nomeUm.nome.length}, ${nomeUm.idade}, ${nomeUm.profissao}, ${nomeUm.profissao.length}`);
// console.log(`${nomeDois.nome}, ${nomeDois.nome.length}, ${nomeDois.idade}, ${nomeDois.profissao}, ${nomeDois.profissao.length}`);

// Exercícios de escrita 3


// let carrinho = []
// 
// const frutaUm = {
// nome: "Laranja",
// disponibilidade: true
// 
// }
// 
// const frutaDois = {
//   nome: "Melacia",
//   frutaDois: true
// }
// 
// const frutaTres = {
//   nome: "Maçã",
//   frutaTres: true
// }
// 
// function recebaObjeto(frutaUm,frutaDois,frutaTres){
//  carrinho.push(frutaUm, frutaDois, frutaTres);
//   
// }
// 
// recebaObjeto(frutaUm,frutaDois,frutaTres);
// console.log(carrinho);

// function disponibilidadeDoProduto(frutaUm) {
//  frutaUm.disponibilidade = !true 
//   
//  console.log(frutaUm)
// }
// disponibilidadeDoProduto(frutaUm)

// Desafio 1

// function usuario() {
//   const nome = prompt("Digite seu nome");
//   const idade = prompt("DIgite sua idade");
//   const profissao = prompt("DIgite sua profissão")
// 
// 
// 
//   const usuarioUm = {
//     nome: nome,
//     idade: idade,
//     profissao:profissao,
// 
//     
//   
//   }
// 
// console.log(usuarioUm)
// }

// usuario()

// Desafio 2

// const filmeUm = {
//   anoLancamento: 2000,
//   nome: "Rei Leão"
// 
// }
// 
// const filmeDois = {
// 
//   anoLancamento: 2002,
//   nomeDois: "Homem Aranha"
//   
// }
// 
// 
// 
// function filme(filmeUm,filmeDois) {
// 
//   console.log(filmeUm);
//   console.log(filmeDois);
// 
//  console.log("O primero filme foi lançado  antes do segundo?",filmeUm.anoLancamento >= filmeDois.anoLancamento);
//  console.log("O primeiro filme foi lançado no mesmo ano do segundo?",filmeUm.anoLancamento === filmeDois.anoLancamento)
// 
//  
// }
// 
//  filme(filmeUm,filmeDois)

// Desafio 3