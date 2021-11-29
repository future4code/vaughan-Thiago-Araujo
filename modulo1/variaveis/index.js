//console.log("Olá Mundo")
/*
1.console = 10 
  console = 10, 5

2.console = 10, 10, 10
  
3.Quantas horas você trabalha por dia? = 10
  Quanto você recebe por dia? = 10
  Voce recebe ${t/p} por hora = 1

*/

//const nome = prompt("Qual seu nome?");
//const idade = prompt("Qual sua idade?");

//console.log(typeof nome);
//console.log(typeof idade);
// Apareceu "undefined" pois não foi atribuído nenhum valor a ela.
//Não se era pra aparecer string mas isso ocorreu.

//console.log("Olá",nome,"você tem",idade,"anos");

//const roupaEhPreta = prompt("Você está usando uma roupa preta hoje?");
//const jaBebeuAguaHoje = prompt("Já bebeu água hoje?");
//const jaAlmocouHoje = prompt("Já almoçou hoje?")
//
//console.log("Você está usando uma roupa preta hoje?",roupaEhPreta,"Já bebeu água hoje?",jaBebeuAguaHoje,"Já almoçou hoje?",jaAlmocouHoje);
let a = 25
let b = 10

b = a - (a - b)
a = b + (a - b)

console.log("O novo valor de a é", b);
console.log("O novo valor de b é", a);