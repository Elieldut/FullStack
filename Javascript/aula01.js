// Criando Objetos em JavaScript

let nome = "Eliel";
let idade = 21;
let estudante = true;

console.log(nome);
console.log(idade);
console.log(estudante);

let usuario = { 
    nome: "Eliel",
    idade: 21,
    curso: "JavaScript"
};

console.log(usuario);
console.log(usuario.nome);
console.log(usuario.idade);
console.log(usuario.curso);
console.log(usuario.email); 

let produto = {
    nome: "shirt",
    preco: 100.00,
    categoria: "clothes",
    estoque: 10000,
    
};

console.log(produto);
console.log(produto.nome);
console.log(produto.preco);
console.log(produto.categoria);
console.log(produto.estoque);

// Criando Objetos em JavaScript

// 📦 ARRAYS. Um array permite guardar vários valores

let frutas = [
    "Abacaxi", 
    "Acerola", 
    "Banana"
];

// JavaScript começa a contar arrays pelo 0. Então usamos... 

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

let produtos = [
    {
        nome: "shirt",
        preco: 100.00,
        categoria: "clothes",
        estoque: 100000,
    },

    {
        nome: "pants",
        preco: 150.00,
        categoria: "clothes",
        estoque: 100000,
    },

    {
        nome: "shoes",
        preco: 200.00,
        categoria: "footwear",
        estoque: 100000,
    }
];
console.log(produtos);
console.log(produtos[0].preco);

//Exercise

let produtos1 = [
    {
        Nome: "BMW",
        Preço: 100000.00,
        Categoria: "Carro",
        Estoque: 1000
    },

    {
        Nome: "MClaren",
        Preço: 200000.00,
        Categoria: "Carro",
        Estoque: 500
    },

    {
        Nome: "Lamborghini",
        Preço: 300000.00,
        Categoria: "Carro",
        Estoque: 100
    },
];

//console.log(produtos1[0].Nome); console.log(produtos1[1].Preço); console.log(produtos1[2].Estoque);
//

for (let i = 0; i < produtos1.length; i++) {
    console.log(produtos1[i].Nome);
}

// 🚀 Agora vem uma mudança importante

//Precisamos de uma forma de repetir uma operação. É aí que entram os loops. 🔄 Primeiro: for 





