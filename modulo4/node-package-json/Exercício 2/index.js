const operacao =process.argv[3]
const numero1 = Number(process.argv[4]);
const numero2 = Number(process.argv[5]);

switch(operacao) {
  case "soma":
    numero1 + numero2
    break;
  case "sub":
    numero1 - numero2
    break;
  case "mul":
    numero1 * numero2
    break;
  case "div":
    numero1 / numero2
    break;      
}

console.log(`Resultado = ${operacao}`)