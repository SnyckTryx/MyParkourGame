
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Parkour_Guy
var ParkourGuyImage
var ground
var Cloud_Islands
var CloudIslandsImg
var fireball
var fireballImg

var start_screen
var end_screen

function preload()
{
	CloudIslandsImg = loadImage("Cloud_Islands.jpg")
	ClearSky_BG = loadImage("ClearSky.jpeg")
	ParkourGuyImage = loadImage("ParkourGuy.png")
	fireballImg = loadImage("Fireball.jpeg")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here. 
	Parkour_Guy = createSprite(100,650,20,20)
	Parkour_Guy.addImage(ParkourGuyImage)
	Parkour_Guy.scale = 0.35
	ground = createSprite(400,690,800,5)
	fireball = createSprite(400,350,50,50)
	fireball.addImage(fireballImg)


	Parkour_Guy.debug = true

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(ClearSky_BG);

  if(keyDown("space")&& Parkour_Guy.y >= 70) {	  
	Parkour_Guy.velocityY = -6;
  }
  if(keyDown("LEFT_ARROW")) {
	Parkour_Guy.x = Parkour_Guy.x - 4;
  }
  if(keyDown("RIGHT_ARROW")) {
	Parkour_Guy.x = Parkour_Guy.x + 4;
  }
Parkour_Guy.velocityY = Parkour_Guy.velocityY + 0.5

Parkour_Guy.collide(ground)
Parkour_Guy.collide(Cloud_Islands)


  drawSprites();
  
}