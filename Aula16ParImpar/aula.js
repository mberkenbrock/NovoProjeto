
//Receber uma quantidade de valores para avaliar
//funcao existe se cada valor é par ou impar;

const qtdNum = 10;
recebeValorParImpar(qtdNum);

function recebeValorParImpar (qtd){
    let i = 1;

    do{
        if(i % 2 === 0)
            console.log(i,"PAR");
        else 
            console.log(i,"IMPAR");

        i++;
    }while(i <= qtd)

}
