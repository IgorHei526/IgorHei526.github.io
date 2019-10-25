function letrasVenceu(){
  image(imgEstrada, 0,0,600,400);
  image(imgVaca,larguraTela/2 - 100, alturaTela/2 - 100,200,200)
  textSize(40);
      fill("pink");

  textAlign(CENTER);
  text("Vaca Venceu!",larguraTela/2, alturaTela/2 - 130);
}

function setasVenceu(){
  image(imgEstrada, 0,0,600,400);
  image(imgGalinha,larguraTela/2 - 100, alturaTela/2 - 100,200,200)
  textSize(40);
      fill("yellow");

  textAlign(CENTER);
  text("Galinha Venceu!",larguraTela/2, alturaTela/2 - 130);
}

function placar(){
  textSize(32);
  text(galinhaPlacar, 428, 30);
  fill('grey');
  text(vacaPlacar, larguraTela/4, 30);
  fill('grey');
  
  if(yVaca <= 15){
    vacaPlacar += 1;
    yVaca = 368;
    somPonto.play();
  }
  
 if(yGalinha <= 15){
    galinhaPlacar += 1;
    yGalinha = 368;
    somPonto.play();
  }
    
}

function jogar(){
   if(galinhaPlacar < 5 && vacaPlacar < 5){
    mostraCarros();
    movimentaCarros();
    movimentaGalinha();
    mostraVaca();
    movimentaVaca();
    placar();
    atropelamento();
  
  }else{
    //Verifica e mostra o campeão
    if(galinhaPlacar == 5)
      setasVenceu();
      else
        letrasVenceu();    
  }
}

