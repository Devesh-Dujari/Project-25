
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var world;

var ground;
var dustbin;	
var paper;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	ground=new Ground(width/2,670,width,20);

	dustbin=new Dustbin(1200,650);

	paper = new Paper(400, 600, 50);
	//paper.visible = false;
	//paper.scale = 0.1;

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  ground.display();
  
  dustbin.display();
  
  paper.display();

  Matter.Body.applyForce(paper);

}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body, paper.body.position, {x:130, y: -145})
	}

}