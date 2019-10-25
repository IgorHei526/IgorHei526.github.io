function setup() {
  createCanvas(larguraTela, alturaTela);
  somTrilha.play();
  somTrilha.loop();
  somTrilha.setVolume(0.3);
  somPonto.setVolume(0.4);
  somColidiu.setVolume(0.4);
}

function draw() {
  background(imgEstrada);
  if(frameCount < 300) 
    telaInicial();
  else
  jogar();
  
}

//Tela Inicial

function telaInicial(){
  background(imgEstrada);
  image(imgTelaInicial, 20,150, 567, 170);
  textAlign(CENTER);  
  textSize(12);
  text('By Igor Heiderscheidt',0,385,150,100);
}