const user = {
  nome: 'Yuri',
  idade: 20,
};

const update = {
  idade: 25,
  cidade: 'Campo Grande',
};

const novo = {
  ...user,
  ...update,
};

console.warn(novo);
