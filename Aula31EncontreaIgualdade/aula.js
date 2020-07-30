//Igualdade Objetos (EXercicio)

function endereco(rua,cidade, cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const endereco1 = new endereco('a','b','c');
const endereco2 = new endereco('a','b','c');

console.log(saoIguais(endereco1,endereco2));
console.log(temEnderecoMemoriaIgual(endereco1,endereco2));


function saoIguais(endereco1,encereco2){
    //comparar se propriedades são iguais
    
    return endereco1.rua === endereco2.rua && 
           endereco1.cidade === endereco2.cidade &&
           endereco1.cep === endereco2.cep;
}

function temEnderecoMemoriaIgual(endereco1,enrececo2){
    // comparando se a referência do objeto aponta para o mesmo local na memoria
    return endereco1 === endereco2;

}

