
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    roof = new ROOF(width/2, height/4, width/2, 20);
	//Create the Bodies Here.
	bobdiameter = 40;
	Startbobx = width/2;
	Startboby = height/4+500;
	bob1 = new BOB(Startbobx- bobdiameter*2, Startboby, bobdiameter);
    bob2 = new BOB(Startbobx- bobdiameter, Startboby, bobdiameter);
	bob3 = new BOB(Startbobx, Startboby, bobdiameter);
	bob4 = new BOB(Startbobx + bobdiameter, Startboby, bobdiameter);
	bob5 = new BOB(Startbobx + bobdiameter*2, Startboby, bobdiameter);

	rope1 = new ROPE(bob1.body, roof.body, -bobdiameter*2, 0);
	rope2 = new ROPE(bob2.body, roof.body, -bobdiameter*1, 0);
	rope3 = new ROPE(bob3.body, roof.body, 0, 0);
	rope4 = new ROPE(bob4.body, roof.body, bobdiameter*1, 0);
	rope5 = new ROPE(bob5.body, roof.body, bobdiameter*2, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("WHITE");
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();





  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}


function drawLine(constraint)
{
  bobBodyPosition=constraint.bodyA.position
  roofBodyPosition=constraint.bodyB.position

  roofBodyOffset=constraint.pointB;
  
  roofBodyX=roofBodyPosition.x+roofBodyOffset.x
  roofBodyY=roofBodyPosition.y+roofBodyOffset.y
  line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}



