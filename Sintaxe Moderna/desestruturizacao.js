const produto = {
  nome: 'Teclado',
  preco: 150,
};
const { nome, preco } = produto;
console.warn(nome, preco);

const cores = ['azul', 'verde', 'vermelho'];
const [cor01, cor02] = cores;
console.warn(cor01, cor02);

const usuario = {
  nome: 'Yuri',
  idade: 20,
};
const { nome: meuNome } = usuario;
console.warn(meuNome);

const pessoa = {
  nome: 'Ana',
};
const { cidade = 'Campo Grande' } = pessoa;
console.warn(cidade);

const numeros = [1, 2, 3, 4, 5];
const [n1, ...resto] = numeros;
console.warn(n1, resto);

function mostrar({ nome, idade }) {
  console.warn(nome, idade);
}
mostrar({ nome: 'Yuri', idade: 22 });

const empresa = {
  nome: 'Tech Ltda',
  endereco: {
    Cidade: 'São Paulo',
    estado: 'SP',
  },
};

const {
  endereco: { Cidade },
} = empresa;
console.warn(Cidade); // São Paulo
