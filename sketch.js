
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var ESTADO = 1;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	

	paperBall = new Paper(200,200,20);
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	console.log(paperBall.body.position.x);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);

  groundObject.display();
  paperBall.display();
  dustbinObj.display();
  


  if(keyCode === UP_ARROW && ESTADO === 1){
	  Matter.Body.applyForce(paperBall.body, paperBall.body.position,{x:2, y: -4});
  }

  if(keyCode === DOWN_ARROW && ESTADO === 1){
	  ESTADO = 2;
  }
 
  fill(0);
  textSize(20);
  text("If Up Arrow is pressed the paper will go up", 20, 20);
  text("If Down Arrow is pressed the paper will go down", 20, 50);


  drawSprites();
}

