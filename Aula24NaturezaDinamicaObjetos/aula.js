//Javascript - Naturza dinâmica de Objetos

const mouse = {
    cor: 'red',
    marca: 'microsoft'
}

mouse.velocidade = 5000;
mouse.trocarDPI = function(){
    console.log('Mudando DPI');
}

delete mouse.marca;

console.log(mouse);