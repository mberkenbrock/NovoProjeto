//Velocidade Maxima 70km
//a cada 5km acima do lite você ganha 1 ponto
// Math.Floor();
// caso pontos maior que 12 - Carteira Suspendida
const vlMaxPermitido = 70;
const kmPorPonto = 5;
let resultado = verificaVelocidade(120);

console.log(resultado);

function verificaVelocidade(vel){
    let qtdPontos = 0;

    if(vel <= vlMaxPermitido){
        console.log('Velocidade Permitida');
    }
    else{
        qtdPontos = Math.floor((vel - vlMaxPermitido) / kmPorPonto);
        return qtdPontos > 12 ? 'Carteira Suspensa':qtdPontos;
    }
}



