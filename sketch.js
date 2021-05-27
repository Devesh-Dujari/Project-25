
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var world;

var ground;
var dustbin;	
var paper;
var render;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	ground=new Ground(width/2,670,width,20);

	dustbin=new Dustbin(1200,650);

	paper = new Paper(400, 595, 50);
	//paper.visible = false;
	//paper.scale = 0.1;

    render = Render.create({
		element : document.body,
		engine:engine,
		options : {
			width : 1600,
			height : 700,
			wireframes : false,
		}
	});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  ground.display();
  
  dustbin.display();
  
  paper.display();

}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body, paper.body.position, {x:550, y: -500})
	}
}