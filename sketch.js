const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dogSprite,dogImage;
var world;

function preload()
{
	dogImage = loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(500,500);
  rectMode(CENTER);
  dogSprite=createSprite(width/2, 200, 10,10);
	dogSprite.addImage(dogImage)
	dogSprite.scale=0.6


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(230);
drawSprites();
}
 