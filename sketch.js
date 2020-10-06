
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperobject;
var dustbinobject;
var groundobject;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dustbinobject = new Dustbin (500,300);
groundobject = new Ground (width/2, 600, width, 50);
paperobject = new Paper (500, 400, 200)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 dustbinobject.display();
 paperobject.display();
 groundobject.display();
}



