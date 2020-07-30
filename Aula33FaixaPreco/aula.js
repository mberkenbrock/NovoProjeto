//criar array de objetos de faixa de preço
//faixas, tooltip, min e valor maximo;

//Primeira Opção
let faixas = [
    {tooltip: 'Aé R$700', minimo: 0, maximo: 700},
    {tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'de R$1000 ou mais', minimo: 1000, maximo: 9999999}    
];

//Segunda Opção (Factory Function)
function criaFaixaPreco(tooltip,minimo,maximo){

    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixaPreco('a',1,100),
    criaFaixaPreco('a',100,1000),
    criaFaixaPreco('a',1000,10000)
]

console.log(faixas);
console.log(faixas2);