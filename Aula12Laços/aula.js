//for
//while
//do while
//for in
//for of

/*for(let i = 1;i <= 5; i++){
    console.log('Estou aprendendo', i);

    //apenas impares
    if(i % 2 !== 0){
        console.log("Impares: ", i);
    } 

}

//while loop

let i = 5;

while (i >= 1){
    console.log('Estou aprendendo While', i);
    i--;
}

let i = 0;

do{
    console.log('Digitando',i);
    i++;

}while(i < 10)

*/

//FOR IN - sobre propriedades de obg de um array

const pessoa = {
    nome: 'Marlon',
    idade: 28
}

//key-value
for(let chave in pessoa){
    console.log(chave, pessoa['nome']);
}

const cores = ['Vermelho','Azul','Preto','Branco'];

for(let indice in cores){
    console.log(indice,cores[indice]);
}

//FOR OF
for(let cor of cores){
    console.log(cor);
}
