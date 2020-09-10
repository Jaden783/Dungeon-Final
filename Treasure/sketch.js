
var bg1,bg2,bg3,bg4;
var pt1Img;
var playerRun;
var spike1,spike2,spike3;
var spikeImg;
function preload(){

bg1 = loadImage("Backgrounds/Spawn.jpg");
bg1.scale = 0.1;
bg2 = loadImage("Backgrounds/hall.jpg");
bg3 = loadImage("Backgrounds/Dungeon1.png");
spikeImg = loadImage("Backgrounds/Spikes.png");
pt1Img = loadImage("Backgrounds/PlatformB.png")
pt1Img.scale = 0.3;
playerRun = loadAnimation("Characters/2/Run0.png","Characters/2/Run2.png","Characters/2/Run3.png");
playerAttack = loadAnimation("Characters/2/Attack0.png","Characters/2/Attack1.png","Characters/2/Attack2.png","Characters/2/Attack3.png","Characters/2/Attack4.png","Characters/2/Attack5.png","Characters/2/Attack6.png","Characters/2/Attack7.png","Characters/2/Attack8.png","Characters/2/Attack9.png");
enemyWalk = loadAnimation("Troll3/walk1.png","Troll3/walk2.png","Troll3/walk3.png","Troll3/walk4.png","Troll3/walk5.png","Troll3/walk6.png","Troll3/walk7.png","Troll3/walk8.png","Troll3/walk9.png",)
enemyAttack = loadAnimation("Troll3/attack0.png","Troll3/attack1.png","Troll3/attack2.png","Troll3/attack3.png","Troll3/attack4.png","Troll3/attack5.png","Troll3/attack6.png","Troll3/attack7.png","Troll3/attack8.png","Troll3/attack9.png",)
}

function setup() {
  createCanvas(displayWidth, displayHeight - 100);
 player = createSprite(200, 200, 50, 50);
 player.addAnimation("run",playerRun);
 player.addAnimation("attack",playerAttack);
 player.scale = 0.1;
 
 enemy = createSprite(displayWidth-100,displayHeight-150,50,100);
enemy.addAnimation("walk",enemyWalk);
enemy.addAnimation("kill",enemyAttack)
enemy.scale = 0.3;
 enemy.visible = false;

spike1 = createSprite(100,displayHeight-100);
spike1.addImage("spike",spikeImg);
 
pt1 = createSprite(300,280,150,20);
pt1.addImage(pt1Img);
pt2 = createSprite(600,420,150,20);
pt2.addImage(pt1Img);
pt3 = createSprite(1190,465,150,20);
pt3.addImage(pt1Img);
ground = createSprite(displayWidth/2,displayHeight-150,displayWidth,10);

player.setCollider("rectangle",0,0,300,900);
pt1.setCollider("rectangle",0,50,190,50);
pt2.setCollider("rectangle",0,50,190,50);
pt3.setCollider("rectangle",0,50,190,50);
enemy.setCollider("rectangle",200,0,500,500)
}

function draw() {
  background(bg1);  
 player.collide(pt1);
 player.collide(pt2);
 player.collide(pt3);
 player.collide(ground);
 enemy.collide(ground);
 if(!(player.isTouching(pt1))){

player.velocityY = 3;

 }
if(!(enemy.isTouching(player))){

  enemy.changeAnimation("kill")

}

 player.debug = true;
 pt1.debug = true;
 enemy.debug = true;
 textSize(30);
 text(mouseX + "-" + mouseY, 600,100);
 if(keyWentDown("a")){
  player.changeAnimation("attack");
 }
 if(keyWentUp("a")){
  player.changeAnimation("run");
 }

 if(keyWentDown(RIGHT_ARROW)){
  player.velocityX = +3;
 }
 if(keyWentUp(RIGHT_ARROW)){
  player.velocityX = 0;
 }
 if(keyDown("SPACE")){

player.velocityY = -10;

 }
 player.velocityY += 0.5;

 if(player.x>displayWidth){
  bg1 = loadImage("Backgrounds/hall.jpg");
  player.x = 50;
pt1.visible = false 
pt2.visible = false 
pt3.visible = false 

spawnEnemy();
spawnPlatforms();
ground.destroy();

}
  
drawSprites();
}

function spawnEnemy(){
enemy.velocityX = -2
enemy.visible = true;


}

function spawnPlatforms(){

var mpt2  = createSprite(displayWidth,random(100,600),120,20);
mpt2.velocityX = -5;
mpt2.shapeColor = "red";
}