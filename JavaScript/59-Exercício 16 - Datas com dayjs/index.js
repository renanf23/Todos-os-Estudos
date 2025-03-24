const dayjs = require("dayjs");

let hoje = dayjs();
const aniversario = (data) => {
  const nascimento = dayjs(data);
  const idade = hoje.diff(nascimento, "year");
  const aniversario = nascimento.add(idade + 1, "year");

  console.log(`Hoje é dia: ${hoje.format("DD/MM/YYYY")}`);
  console.log(`Sua idade hoje é: ${idade}`);
  console.log(
    `Seu próximo aniversário é: ${aniversario.format("DD/MM/YYYY")} `
  );
  console.log(
    `Faltam ${
      aniversario.diff(hoje, "day") + 1
    } dia(s) para o seu próximo aniversário`
  );
};

aniversario("1996-09-23");
