//Exercicio Nota Escolar
// Obter a média a partir de um array

//0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100 A

const notas = [70,70,70];
let media = mediaAluno(notas);

console.log('Media do Aluno: ', media);


function mediaAluno(notas){
    let media = 0;
    for(let val in notas){
        media += notas[val];
    }
    
    media = media / notas.length;

    if(media < 59) return 'F';
    if(media <= 69) return 'D';
    if(media <= 79) return 'C';
    if(media <= 89) return 'B';
    return 'A';
}