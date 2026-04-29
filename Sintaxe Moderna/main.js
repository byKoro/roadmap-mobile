const variavel_const = 'Não poderá ser reatribuido';
let variavel_let = 'Pode ser reatribuido';
// Essas variáveis possuem escopo de bloco, ou seja, caso sejam declaradas dentro de um if, serão exclusivas daquele bloco.

if (variavel_const == 'Não poderá ser reatribuido') {
  let variavel_let_bloco = 'Existe apenas dentro do IF';
}

// console.warn(variavel_let_bloco); Gera erro

function soma(a, b) {
  return console.log(this);
}

// console.warn(soma(1, 2));  Forma antiga

//const somar = (a, b) => console.log(this);

const pessoa = { nome: 'Yuri', idade: 22 };
const { nome, idade } = pessoa;
console.warn(nome);
console.warn(idade);
