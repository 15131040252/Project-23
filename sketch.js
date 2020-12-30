var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var catcher1;
var catcher2;
var catcher3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup()
{
	createCanvas(800, 700);
	rectMode(CENTER);	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	catcher1 = new Catcher(400 , 600 , 300 , 30);
	catcher2 = new Catcher(300 , 500 , 30 , 100);
	catcher3 = new Catcher(500 , 500 , 30 , 100);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  catcher1.display();
  catcher2.display();
  catcher3.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW)
  {
	Matter.Body.setStatic(packageBody, false);
    packageSprite.velocityY = 10;
  }
}