function mostraVaca(){
  image(imgVaca, xVaca, yVaca, 28, 28);
  image(imgGalinha, xGalinha, yGalinha, 28, 28)
}

function movimentaVaca(){
  if(keyIsDown(UP_ARROW)){
    //yVaca = yVaca - 3;
    if(yGalinha > 7)
    yGalinha -= 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(yGalinha < 366)
    yGalinha += 5;
  }
  
  if (keyIsDown(RIGHT_ARROW)) {
    if(xGalinha < 568)
      xGalinha += 5;
  }
  
  if (keyIsDown(LEFT_ARROW)) {
    if(xGalinha > 0)
      xGalinha -= 5;
  }
}

function movimentaGalinha(){
  if(keyIsDown(87)){
    //yVaca = yVaca - 3;
    if(yVaca > 7)
    yVaca -= 5;
  }
  if(keyIsDown(83)){
    if(yVaca < 366)
    yVaca += 5;
  }
  
  if (keyIsDown(68)) {
    if(xVaca < 568)
      xVaca += 5;
  }
  
  if (keyIsDown(65)) {
    if(xVaca > 0)
      xVaca -= 5;
  }
}