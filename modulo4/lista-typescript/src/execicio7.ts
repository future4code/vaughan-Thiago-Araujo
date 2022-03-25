const ajustaPreco = (preco: number): string => {
  const valorAjustado: string = preco.toFixed(2).replace('.', ',')
  return "R$ " + valorAjustado
}

type Mercado = {
  nome: string,
  quantidade: number,
  valorUnitario: number
}

let produto1: Mercado = {
  nome: 'MacMugffin',
  quantidade: 0,
  valorUnitario: 0
}


let produto2: Mercado = {
  nome: 'Vassoura voadora',
  quantidade: 0,
  valorUnitario: 0
}


let produto3: Mercado = {
  nome: 'Laço da verdade',
  quantidade: 0,
  valorUnitario: 0
}


let produto4: Mercado = {
  nome: 'O precioso',
  quantidade: 0,
  valorUnitario: 0
}


let produto5: Mercado = {
  nome: 'Caneta de 250 cores',
  quantidade: 0,
  valorUnitario: 0
}


let produto6: Mercado = {
  nome: 'Plumbus',
  quantidade: 0,
  valorUnitario: 0
}


let produto7: Mercado = {
  nome: 'Pokebola',
  quantidade: 0,
  valorUnitario: 0
}
