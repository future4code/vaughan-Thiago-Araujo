const funcao1 = (nome: string, dataNascimento: string): string => {
  const [dia, mes, ano] = dataNascimento.split("/");
  const frase: string = `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`;
  return frase;
};

console.log(funcao1("Thiago", "23/09/2002"));