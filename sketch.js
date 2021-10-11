
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine 
let world;

var ball;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
	    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2	    
	}

	ball = Bodies.circle(200,100,20,ball_options);
	
	World.add(world,ball);

	ground = new Ground(width/2, 670, width, 20);
    leftSide = new Ground(600,600,20,120);
	rightSide = new Ground(800,600,20,120);

	Engine.run(engine);
    ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x, ball.position.y, 20);

 

  ground.display();
  keyPressed();
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0.7, y: -0.1});
  }
}

