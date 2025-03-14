// **var**

var nome = "João";
console.log(nome);   //"João"

nome = "Maria";
console.log(nome);   //"Maria"

//Ex1
nome = "Carlos";
console.log(nome);   // altera o valor da variável nome

// **let**
//Ex2
let cidade = "Lisboa";
console.log(cidade);    // declara a variavel Lisboa

//let idade = 20;
//console.log(idade);  //20

//idade = 21;
//console.log(idade);  //21

//Ex3
const PI = 3.14;
console.log(PI);     //3.14

//PI = 3.1416;
//console.log(PI);
//** Tipos de Dados **

//Ex4
let carros = ["Toyota","Honda",{marca:"Mercedes", ano:2025} , ["Audi","Ford"]];      //cria um Array de dados
console.log(carros);

//Ex5
let carro = {                           //cria um ObjectS
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    eletrico: false,
    caracteristicas: ["Automático", "GPS", "Ar condicionado"]
};

// Imprimir cada propriedade e valor do objeto
for (let propriedade in carro) {
    console.log(`${propriedade}:`, carro[propriedade]);
}

//String
//let frase = "Olá Mundo!";
//console.log(typeof frase);  //"string"

//Number
//let numero = 10;
//console.log(typeof numero); //"number"

//Boolean
//let verdadeiro = true;
//console.log(typeof numero); //"boolean"

//Array
//let lista = ["banana", "maçã", "laranja"];
//console.log(typeof lista);  //"object"

//Object
//let pessoa = { nome: "João", idade: 20};
//console.log(typeof pessoa);

//null
//let nulo = null;
//console.log(typeof nulo); //"object"

//undefined
//let indefinido;
//console.log(typeof indefinido); //"undefined"

