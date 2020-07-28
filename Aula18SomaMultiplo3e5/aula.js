//criar funcao soma que retorna
//soma de todos os multiplos de 3 e 5


let resultado = somar(10);

console.log(resultado);

function somar(limite){
    let acum = 0;

    for(let i = 0; i <= limite;i++){
        if(i % 3 === 0)
            acum += i;
        if(i % 5 === 0)
            acum += i;
    }
    return acum;
}