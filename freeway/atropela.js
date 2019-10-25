let atropelaVaca = false;
let atropelaGalinha = false;

function atropelamento(){
  //Teste carro a carro
 for(let i=0; i < imgCarro.length; i++){
   atropelaVaca = collideRectRect(xVaca, yVaca, 28, 28, xCarro[i], yCarro[i], 50, 30);
   
   if(atropelaVaca){
     //Vaca atropelada
     yVaca = 368;
     xVaca = 150;
     somColidiu.play();
    if(vacaPlacar >= 1){//Evita o placar negativo
     vacaPlacar -= 1;
    }     
   }
   
   atropelaGalinha = collideRectRect(xGalinha, yGalinha, 28, 28, xCarro[i], yCarro[i], 50, 30);
   
   if(atropelaGalinha){
     //Galinha atropelada
     yGalinha = 368;
     xGalinha = 428;
     somColidiu.play();
    if(galinhaPlacar >= 1)
     galinhaPlacar -= 1;
   }//If  
 }//For
}//Atropelamento