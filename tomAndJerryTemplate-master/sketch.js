var bgImg
var Tom, Jerry
var Tom1, Tom2, Tom3
var Jerry1, Jerry2, Jerry3


function preload() {
    bgImg = loadImage("images/garden.png")
    Tom1 = loadAnimation("images/cat1.png")
    Tom2 = loadAnimation("images/cat2.png","images/cat3.png")
    Tom3 = loadAnimation("images/cat4.png")
    Jerry1 = loadAnimation("images/mouse1.png")
    Jerry2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    Jerry3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    Tom = createSprite(800,500,30,30)
    Tom.scale=0.1
    Jerry = createSprite(100,500,30,30)
    Jerry.scale=0.1
    Tom.addAnimation("parado",Tom1)
    Tom.addAnimation("andando",Tom2)
    Tom.addAnimation("esperando",Tom3)
    Jerry.addAnimation("parado",Jerry1)
    Jerry.addAnimation("andando",Jerry2)
    Jerry.addAnimation("esperando",Jerry3)


}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(Tom.x - Jerry.x <(Tom.width - Jerry.width)/2){
        Tom.velocityX=0
        Tom.changeAnimation("esperando")
        Tom.x=300
        Jerry.changeAnimation("esperando",Jerry3)

    }

    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        Jerry.changeAnimation("andando")
        Jerry.frameDelay = 25

        Tom.velocityX=-5
        Tom.changeAnimation("andando")
        
    }

  //For moving and changing animation write code here


}
