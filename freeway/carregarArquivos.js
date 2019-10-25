//Variáveis para as imagens
let imgEstrada;
let imgVaca;
let imgGalinha;
let imgCarro = [];

function preload(){
  imgEstrada = loadImage('imagens/estrada.png');
  imgVaca = loadImage('imagens/ator-1.png');
  imgGalinha = loadImage('imagens/ator-2.png');
  imgTelaInicial = loadImage('imagens/telaInicial.png')
  
  imgCarro[0] = loadImage('imagens/carro-1.png');
  imgCarro[1] = loadImage('imagens/carro-2.png');
  imgCarro[2] = loadImage('imagens/carro-3.png');
  
  imgCarro[3] = loadImage('imagens/carro-4.png');
  imgCarro[4] = loadImage('imagens/carro-5.png');
  imgCarro[5] = loadImage('imagens/carro-6.png');
  
  somPonto = loadSound('sons/pontos.wav');
  somColidiu = loadSound('sons/colidiu.mp3');
  somTrilha = loadSound('sons/If_I_Had_a_Chicken4.wav');
}

//Variáveis de movimento

let yVaca = 368;
let xVaca = 150;

let yGalinha = 368;
let xGalinha = 428;

// Vetores
//            Direita      /      Esquerda
let xCarro = [605, 605, 605, -60, -60, -60];
let yCarro = [45, 105, 155, 215, 270, 325];
let velocidadeCarro = [5, 7, 9, 5, 7, 9];

// Placar
let vacaPlacar = 0;
let galinhaPlacar = 0;


// Tela
let larguraTela = 600;
let metadeTela = 300;
let alturaTela = 400;

