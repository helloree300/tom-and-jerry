
var jerry1IMG,jerry2IMG,jerry3IMG
var mouse1IMG, mouse2IMG,mouse3IMG
var gardenIMG

function preload() 
{
    //load the images here
    jerry1IMG=loadImage("images/cat1.png");
    jerry2IMG=loadAnimation("images/cat2.png","images/cat3.png","images/cat4.png");
    gardenIMG=loadImage("images/garden.png");
    mouse1IMG=loadImage("images/mouse1.png");
    mouse2IMG=loadAnimation("images/mouse2.png","images/mouse3.png","images/mouse4.png");
}

function setup()
{
    createCanvas(1000,800);
    garden=createSprite(400,400);
    garden.addImage(gardenIMG);
    garden.scale=1.3
    
    
    

    //create tom and jerry sprites here
    jerry1=createSprite(800,700,30,20);
    jerry1.addImage("cat1",jerry1IMG);
    jerry1.addAnimation("catmoving",jerry2IMG);
    jerry1.scale=0.2;

    mouse1=createSprite(100,700,20,20)
    mouse1.addImage("mouse1",mouse1IMG);
    mouse1.addAnimation("mouseteasing",mouse2IMG);
    mouse1.scale=0.2;
}

function draw(){

    background(0);

    //Write condition here to evalute if tom and jerry collide


    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW)
    {
        jerry1.velocityX = -5;
        jerry1.changeAnimation("catmoving",jerry2IMG);
        mouse1.changeAnimation("mouseteasing",mouse2IMG);
    }
      //For moving and changing animation write code here
      if(jerry.x - mouse.x < (jerry.width - mouse.width)/2)
    {
          jerry.addAnimation(jerryIMG3)
          jerry.scale=0.1
          jerry.changeAnimation(jerryIMG1)
          jerry.velocityX=0
    }
    
    }
    