// Exercícios de interpretação 1

// Está criando um loop pra calcular o valor, valor vai ser igual a 10

// Exercícios de interpretação 2

// A) Todos os números maiores que 18, ou seja 19, 21, 23, 25, 27, 30 

// B) Só alterar o valor de > 18 por > 9 assim mostraria todos o números

// Exercícios de interpretação 3

// * 
// **
// ***
// ****

// Exercícios de escrita 1
// 
// const temPet = prompt("Você tem algum pet?")
// 
// if(temPet === "não") {
// 
//   console.log("Que pena! Você pode adotar um pet!")
// 
// 
// }else if(temPet === "sim" ) {
// 
//   const numeroDePet = Number(prompt("Quantos?"))
//    
//   switch(numeroDePet) {
//     case 1:
//       console.log(prompt("Digite o nome dele ?"))
//       break
//     
//     case 2:
// 
//       console.log(prompt("Digite o nome do primeiro?"))
//       console.log(prompt("Digite o nome do segundo?"))
//       break
// 
//     case 3:
//       
//       console.log(prompt("Digite o nome do primeiro?"))
//       console.log(prompt("Digite o nome do segundo?"))
//       console.log(prompt("Digite o nome do terceiro?"))
//       break
// 
//     case 4:
// 
//       console.log(prompt("Digite o nome do primeiro?"))
//       console.log(prompt("Digite o nome do segundo?"))
//       console.log(prompt("Digite o nome do terceiro?"))
//       console.log(prompt("Digite o nome do quarto?"))
//       break
// 
//   } 
//   
// }

// Exercícios de escrita 2

// const arrayOriginal = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// 
// console.log("Todos o números do array")
// for(let numeros of arrayOriginal) {
// 
//   
//   console.log(numeros)
//   
// }
// 
// console.log("Todos números dividos por 10")
// for(let numeros of arrayOriginal) {
// 
//   
//   const dividido = numeros / 10
//   console.log(dividido)
// }
// 
// 
// for(let numeros of arrayOriginal) {
// 
//   const par = (arrayOriginal % 2)
// 
//  if(par === 0) {
// 
//   console.log("Números ímpares")
// 
// }else if(par !== 0) {
// 
//   console.log("Números pares")
//  }
// }
// 
// let maior = 90
// 
// for(let num of arrayOriginal) {
// 
//   if(num > maior) {
// 
//     maior = num
//     console.log("Maior número é", num)
//   }
// }
// let menor = 20
// 
// for(let num of arrayOriginal) {
// 
//   if(num < menor) {
// 
//     menor = num
//     console.log("O menor número é", num)
//   }
// }
