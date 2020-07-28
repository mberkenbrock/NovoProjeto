//if else

// Hora entre 06 e 12  - bom dia.
// Hora entre 12 e 18 - boa tarde.
// caso controrio boa noite;

let hora = 18;

if(hora >= 6 && hora <= 12){
    console.log('Bom dia');
}
else if(hora > 12 && hora <= 18){
    console.log('Boa tarde');
}
else{
    console.log("Boa noite");
}


//switch case

let permissao = 'nenhum'; //comum, gerente ou diretor

switch(permissao){
    case 'comum':
    console.log("Usuario Comum");
    break;
    case 'gerente':
    console.log("Usuario Gerente");
    break;
    case 'diretor':
    console.log("Usuario diretor");
    break;

    default:console.log("Usuario não reconhecido");
}