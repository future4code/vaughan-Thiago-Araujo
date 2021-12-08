// Exercícios de interpretação 1

// A) O código pede ao usúario para que ele digite um número para testar, em seguida ele retorna o resto da divisão por 2,
// se o valor for igual a 0 passou no teste se der valor diferente não passou no teste.

// B) Todo número que for igual a 0

// C) Todo número que for diferente de 0

// Exercícios de interpretação 2

// A) O código serve para digitar uma fruta e dizer o valor dela 

// B) O preço da fruta Maçã é R$ 2.25

// C) O preço da fruta Pêra é R$ 5

// Exercícios de interpretação 3

// A) pede a usúario para que ele digite um número

// B) Esse número passou no teste, iria dar erro por falta do else

// C) Sim, o let mensagem está dentro de um if então ele não retornará a mensagem secreta.

// Exercícios de escrita 1

// const idade = Number(prompt("Digite sua idade"))
// 
// if (idade >= 18) {
// 
//   console.log("Você pode dirigir");
// 
// } else {
// 
//   console.log("Você não pode dirigir")
// 
// }

// Exercícios de escrita 2

// const periodo = prompt("Qual o seu período? M (matutino) ou V (Vespertino) ou N (Noturno)")
// 
// if (periodo === "M") {
// 
//   console.log("Bom dia!")
// 
// } else if (periodo === "V") {
// 
//   console.log("Boa Tarde!")
// 
// } else if (periodo === "N") {
// 
//   console.log("Boa Noite!")
// 
// }

// Exercícios de escrita 3

// const periodo = prompt("Qual o seu período? M (matutino) ou V (Vespertino) ou N (Noturno)")
// 
// switch (periodo) {
//   case "M":
//       console.log("Bom dia!")
//       break
//    
//   case "V":
//       console.log("Boa tarde!")
//       break
// 
//   case "N":
//       console.log("Boa noite!")
//       break      
// }

// Exercícios de escrita 4

// const filme = prompt("Qual o gênero de filme que vão assistir?");
// const preco = prompt("Qual o preço que gostaria de pagar?");
// const lanche = prompt("Gostaria de uma pipoca?")
// 
// if (filme === "fantasia", preco <= 15,lanche === "não") {
// 
//   console.log("Bom filme!")
// 
// } else if (filme === "fantasia", preco <= 15, lanche === "sim") {
// 
//   console.log("Bom filme!")
//   console.log("Aproveite a pipoca!")
// 
// } else {
// 
//   console.log("Escolha outro filme :(")
// 
// }

// Desafio 1 ↑

// Desafio 2

console.log("----Dados da compra----")

const nome  = prompt("Nome completo")
const tipo = prompt("Qual o tipo de jogo")
const etapa = prompt("Qual etapa do jogo")
const categoria  = prompt("Qual a categoria do jogo")
const quantidade = Number(prompt("Quantos ingressos"))

console.log(nome)
console.log(tipo)
console.log(etapa)
console.log(categoria)


if (tipo === "DO") {

  if(etapa === "SF") {

    if(categoria === "1"){

      console.log(quantidade * 1320)
      
    } else if(categoria === "2") {

      console.log(quantidade * 880) 

      }else if(categoria === "3"){

      console.log(quantidade * 550)
    
    } else if(categoria === "4")
  
      console.log(quantidade * 220)
    
    
    
    } else if(etapa === "DT") {

      if(categoria === "1"){

        console.log(quantidade * 660)
        
      } else if(categoria === "2") {
  
        console.log(quantidade * 440) 
  
        }else if(categoria === "3"){
  
        console.log(quantidade * 330)
      
      } else if(categoria === "4")
    
        console.log(quantidade * 170)

    } else if(etapa === "FI") {
      
      if(categoria === "1"){

        console.log(quantidade * 1980)
        
      } else if(categoria === "2") {
  
        console.log(quantidade * 1320) 
  
        }else if(categoria === "3"){
  
        console.log(quantidade * 880)
      
      } else if(categoria === "4")
    
        console.log(quantidade * 330)

    }

} else if(tipo === "IN") {
  
  if(etapa === "SF") {

    if(categoria === "1"){

      console.log(quantidade * 1320 * 4)
      
    } else if(categoria === "2") {

      console.log(quantidade * 880 * 4) 

      }else if(categoria === "3"){

      console.log(quantidade * 550 * 4)
    
    } else if(categoria === "4")
  
      console.log(quantidade * 220 * 4)
    
    
    
    } else if(etapa === "DT") {

      if(categoria === "1"){

        console.log(quantidade * 660 * 4)
        
      } else if(categoria === "2") {
  
        console.log(quantidade * 440 * 4) 
  
        }else if(categoria === "3"){
  
        console.log(quantidade * 330 * 4)
      
      } else if(categoria === "4")
    
        console.log(quantidade * 170 * 4)

    } else if(etapa === "FI") {
      
      if(categoria === "1"){

        console.log(quantidade * 1980 * 4)
        
      } else if(categoria === "2") {
  
        console.log(quantidade * 1320 * 4) 
  
        }else if(categoria === "3"){
  
        console.log(quantidade * 880 * 4)
      
      } else if(categoria === "4")
    
        console.log(quantidade * 330 * 4)

    }
}



// categoria1 SF 1.320,00 DT 660,00 FI 1980,00
// categoria2 SF 880,00 DT 440,00 FI 1320,00
// categoria3 SF 550,00 DT 330,00 FI 880.00
// categoria4 SF 220,00 DT 170,00 FI 330,00