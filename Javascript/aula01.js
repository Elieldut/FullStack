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

for (let produto of produtos1) {
    console.log(produto.Nome);
};
// 🚀 Agora vem uma mudança importante

//Precisamos de uma forma de repetir uma operação. É aí que entram os loops. 🔄 Primeiro: for 

console.log("\n");
console.log("\n");

// if e else = Se o carro tiver estoque maior que 0, mostre "Disponível". Caso contrário, mostre "Esgotado".

//if (condição) {
//    // código executado se for verdadeiro
//} else {//
//    // código executado se for falso
//}//

let old = 18;

if (old >= 17) {
    console.log("Você é maior de idade");
}

else{
    console.log("Você é menor de idade");
}

for (let produto of produtos1) {
    if (produto.Estoque > 0) {
        console.log(produto.Nome + " Disponível");
    } else {
        console.log(produto.Nome + " Esgotado");
    }
}

console.log("\n");
console.log("\n");

for (let i = 0; i < produtos1.length; i++) {
    if (produtos1[i].Estoque > 0) {
        console.log(produtos1[i].Nome + " Disponível");
    } else {
        console.log(produtos1[i].Nome + " Esgotado");
    }
}

console.log("\n");
console.log("\n");


for (let produto of produtos1) {
    if (produto.Estoque > 200) {
        console.log(produto.Nome + " Disponível");
    }

    else {
        console.log(produto.Nome + " Esgotado");
    }
}

//else if / Quando temos mais de duas possibilidades:

console.log("\n");

let estoque = 100;

if (estoque === 0) {
    console.log("Esgotado");
} else if (estoque < 100) {
    console.log("Estoque baixo");
} else {
    console.log("Estoque normal");
}

console.log("\n");

for (let i = 0; i < produtos1.length; i++) {
    if (produtos1[i].Estoque === 0) {
        console.log(produtos1[i].Nome + " Esgotado");
    } else if (produtos1[i].Estoque < 200) {
        console.log(produtos1[i].Nome + " Estoque baixo");
    } else {
        console.log(produtos1[i].Nome + " Estoque normal");
    }
}
;

console.log("\n");

// Operadores lógicos

let idade2 = 18;
let temCarteira = true;

if (idade2 >= 18 && temCarteira === true) {
    console.log("Pode dirigir");
}

console.log("\n");

let pagamento = "pix";

if (pagamento === "pix" || pagamento === "cartão") {
    console.log("Pagamento aceito");
}

console.log("\n");

let ativo = true;

if (!ativo) {
    console.log("Usuário inativo");
}

let modelos = [
    {
        nome: "BMW",
        preco: 240000.00,
        categoria: "Carro",
        estoque: 1000
    },

    {
        nome: "mclaren",
        preco: 100000.00,
        categoria: "Carro",
        estoque: 500
    },

    {
        nome: "bugatti",
        preco: 100000.00,
        categoria: "Carro",
    },
];



for (let i = 0; i < modelos.length; i++) {
    if (modelos[i].estoque > 0 && modelos[i].preco < 250000) {
        console.log(modelos[i].nome);
    }
}