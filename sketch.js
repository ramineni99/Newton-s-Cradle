
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var diameter;
function preload()
{

}

function setup() {
	createCanvas(1200, 700);
 diameter = 50;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Roof(680,100,600,50);
    bob1 = new Bob(580,450,25);
    bob2 = new Bob(630,450,25);
    bob3 = new Bob(680,450,25);
    bob4 = new Bob(730,450,25);
    bob5 = new Bob(780,450,25);
    rope1 = new Rope (bob1.body,roof.body,-diameter*4.3,0)
    rope2 = new Rope (bob2.body,roof.body,-diameter*4,0)
    rope3 = new Rope (bob3.body,roof.body,-diameter*3.7,0)
    rope4 = new Rope (bob4.body,roof.body,-diameter*3.4,0)
    rope5 = new Rope (bob5.body,roof.body,-diameter*3.1,0)
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



