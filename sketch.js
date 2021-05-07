var snowLakeImg;
var villageImg;
var childPlayingImg;
var christmasGreetImg;
var bg,snowLakeButton,villageButton,childPlayingButton; 
var snow1,snow2,border;
var snowGroup;


function preload(){
  christmasGreetImg = loadImage("christmas image.jpg");
  snowLakeImg = loadImage("snow1.jpg");
  villageImg = loadImage("snow2.jpg");
  childPlayingImg = loadImage("snow3.jpg");
  snow1 = loadImage("snow4.webp");
  snow2 = loadImage("snow5.webp");

}

function setup() {
  createCanvas(800,400);
  
  border = createSprite(700,250,90,45);
  border.shapeColor = "black";
  border.visible = false;

  snowLakeButton = createSprite(700, 300, 20, 20);
  snowLakeButton.addImage(snowLakeImg);
  snowLakeButton.scale = 0.1;

  villageButton = createSprite(700,250,20,20);
  villageButton.addImage(villageImg);
  villageButton.scale = 0.05;

  childPlayingButton = createSprite(700,350,20,20);
  childPlayingButton.addImage(childPlayingImg);
  childPlayingButton.scale = 0.05; 

  snowGroup = new Group();
}

function draw() {
  
  imageChange();
  

 if(bg) 
  background(bg);  
  drawSprites();
}

function imageChange(){
   if(bg !== snowLakeImg && bg !== villageImg && bg !== childPlayingImg){
     bg = christmasGreetImg;
   }else{
    snowfall();
   }
     
   

   if(mousePressedOver(snowLakeButton)){
     bg = snowLakeImg;
     border.y = snowLakeButton.y;
     border.width = 80;
     border.visible = true;

   }else if(mousePressedOver(villageButton)){
     bg = villageImg;
     border.y = villageButton.y;
     border.width = 90;
     border.visible = true;
   }else if(mousePressedOver(childPlayingButton)){
     bg = childPlayingImg;
     border.y = childPlayingButton.y;
     border.width = 80;
     border.visible = true;
    }


}

function snowfall(){
  if(frameCount%0.5 === 0){
    var snow = createSprite(random(10,790),0,20,20);
    snow.addImage(snow2);
    snow.scale = 0.02;
    snow.velocityY = 1;
    snow.lifetime = 600;
    snowGroup.add(snow);
  
  }
}
