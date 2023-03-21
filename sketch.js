var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombieGroup;
var zombie1Group;
var bulletGroup


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieImg = loadImage("assets/zombie.png")
  bgImg = loadImage("assets/bg.jpeg")
  zombie1Img = loadImage("assets/zombie1.png")
  bulletImg = loadImage("assets/bullet.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1

//creating Groups
zombieGroup = createGroup()
zombie1Group = createGroup()
bulletGroup = createGroup()


//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.4
 
  player.debug = true
   // player.debug = false
    // player.Debug =false
    // Player.debug = true

   //player.Collider("rectagle",0,0,300,300)
   //player.setcollider("rectangle",0,0)
  player.setCollider("rectangle",0,0,300,300)
  // player.Setcollider("rectangle",0,0,300,300)

}

function draw() {
  background(0); 
  spawnZombies()
  spawnZombies1()
  

if (zombieGroup.collide(bulletGroup)) {
  handleBulletCollision(zombieGroup)
}

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
  bullet()
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  //player.addImage( shooter_shooting )
 // player.addImage()
 player.addImage(shooterImg)
 //player.addImage(shooter_1.png)

}

drawSprites();

}

function spawnZombies() {
  if (frameCount % 117 ===0) {
   var zombie = createSprite(1350,random(0,400) , 10,10)
   zombie.addImage(zombieImg)
   zombie.scale = 0.2
   zombie.velocityX = -4
   zombie.velocityY = 1.5
   zombieGroup.add(zombie)
  }
}

function spawnZombies1() {
if (frameCount % 207 === 0) {
  var zombie1 = createSprite(1350, random(0,400), 10, 10)
  zombie1.addImage(zombie1Img)
  zombie1.scale = 0.4
  zombie1.velocityX = -4
  zombie1.velocityY = 1.5
  zombie1Group.add(zombie1)
}
}

function bullet() {
var bullet = createSprite(480,width/2, 10,10)
bullet.y = player.y-35
bullet.addImage(bulletImg)
bullet.scale = 0.1
bullet.velocityX = 8
bulletGroup.add(bullet)
}

function handleBulletCollision(zombieGroup) {
  zombie.destroy()
}


