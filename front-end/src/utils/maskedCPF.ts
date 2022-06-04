const maskedCPF = (cpf: string | undefined) => {
  if (cpf===undefined) {
    return cpf;
  }
  const privateString = '***';
  const newCPF = cpf.toString();
  const secondThree = newCPF.slice(3, 6);
  const lastThree = newCPF.slice(6, 9);
  return `${privateString}.${secondThree}.
    ${lastThree.slice(0, 2)}* - ${privateString.slice(0, 2)}`;
};

export default maskedCPF;
