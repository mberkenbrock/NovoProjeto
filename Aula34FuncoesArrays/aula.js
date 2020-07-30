/*
//Add novos Elementos
const numeros = [1,2,3];

//inserir no início
numeros.unshift(0);
console.log(numeros);
//meio
numeros.splice(1,0,'A');
console.log(numeros);

//final
numeros.push(5);
console.log(numeros);

//Encontrar Elementos tipos Primitivos
*/
const numeros2 = [10,20,6,-1,4,1,0,10];
console.log(numeros2.indexOf(20));
console.log(numeros2.lastIndexOf(10));
console.log(numeros2.includes(-1));

//Encontrar Elementos tipos Referencia

const marcas = [
    {id:1, nome: 'a'},
    {id:2, nome: 'b'},
    {id:3, nome: 'b'},
    {id:4, nome: 'c'},
    {id:5, nome: 'd'}
];

const marca = marcas.find(function(marca){
    return marca.nome === 'a';
});

console.log(marca);


//Remover Elementos
//Dividir Elementos
//Dividir Arrays
//Combinar Arrays

