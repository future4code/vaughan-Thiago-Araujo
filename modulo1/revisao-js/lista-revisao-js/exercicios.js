// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length
}
retornaTamanhoArray("Azul","Amarelo","Vermelho")
console.log(array)

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

console.log(retornaArrayInvertido([0,8,23,16,10,15,41,12,13]))

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b)
}

console.log(retornaArrayOrdenado([36,12,56,7,3]))

// EXERCÍCIO 04
function retornaNumerosPares(array) {

  let par = array.filter(par => (par % 2)== 0)
  return par
}

console.log(retornaNumerosPares([1,2,3,4,5,6,7,8]))
console.log(par);

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let novoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      novoArray.push(array[i] * array[i]);
    }
  }
  return novoArray;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
 const maiorNumero = Math.max(...array)
  return maiorNumero

}
retornaMaiorNumero([1,2,3,4,5,6,7])
console.log(maiorNumero)


// EXERCÍCIO 07
function comparaDoisNumeros(num1, num2) {
  let maiorNumero;
  let menorNumero;
  let maiorDivisivelPorMenor;

  if (num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
  } else {
    maiorNumero = num2;
    menorNumero = num1;
  }

  maiorDivisivelPorMenor = maiorNumero % menorNumero === 0;

  const diferenca = maiorNumero - menorNumero;

  return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca
  };
}



// EXERCÍCIO 08
function retornaNNumerosPares(n) {
  const novoArray = [];
  for (let number = 0; novoArray.length < n; number++) {
    if (number % 2 === 0) {
      novoArray.push(number);
    }
  }
  return novoArray;
}


// EXERCÍCIO 09
function checaTriangulo(a, b, c) {
  if (a !== b && b !== c) {
    return "Escaleno";
  } else if (a === b && b === c) {
    return "Equilátero";
  } else {
    return "Isósceles";
  }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let menor = Infinity;
  let maior = -Infinity;
  let segundoMenor = Infinity;
  let segundoMaior = -Infinity;
  let novoArray = [];

  for (let i of array) {
    if (i < menor) {
      menor = i;
    }
    if (i > maior) {
      maior = i;
    }
  }

  for (let i of array) {
    if (i < segundoMenor && i !== menor) {
      segundoMenor = i;
    }
    if (i > segundoMaior && i !== maior) {
      segundoMaior = i;
    }
  }
  novoArray.push(segundoMaior);
  novoArray.push(segundoMenor);

  return novoArray;
}

// EXERCÍCIO 11
function imprimeChamada(filme) {
  let atoresConcat = "";
  for (let i = 0; i < filme.atores.length; i++) {
    if (i === filme.atores.length - 1) {
      atoresConcat += filme.atores[i];
    } else {
      atoresConcat += filme.atores[i] + ", ";
    }
  }

  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atoresConcat}.`;
}
// EXERCÍCIO 12
function anonimizaPessoa(pessoa) {
  return {
    ...pessoa,
    nome: "ANÔNIMO"
  };
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let pessoasAutorizadas = [];
  for (const pessoa of pessoas) {
    if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
      pessoasAutorizadas.push(pessoa);
    }
  }
  return pessoasAutorizadas;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoasNaoAutorizadas = [];
  for (const pessoa of pessoas) {
    if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60) {
      pessoasNaoAutorizadas.push(pessoa);
    }
  }
  return pessoasNaoAutorizadas;
}

// EXERCÍCIO 14
function calculaSaldo(contas) {
  contas.forEach((conta) => {
    let totalDeCompras = 0;
    conta.compras.forEach((valor) => {
      totalDeCompras += valor;
    });
    conta.saldoTotal -= totalDeCompras;
  });
  return contas;
}

// EXERCÍCIO 15A
function ordenaPorNome(consultasNome) {
  for (let i = 0; i < consultasNome.length; i++) {
    for (let j = 0; j < consultasNome.length - i - 1; j++) {
      if (consultasNome[j].nome > consultasNome[j + 1].nome) {
        const temp = consultasNome[j];
        consultasNome[j] = consultasNome[j + 1];
        consultasNome[j + 1] = temp;
      }
    }
  }
  return consultasNome;
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}