
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;
var ball;
var ground;
var ls;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball_options ={
		isStatic: false,
		restitution: 0.3,
		friction:0,
		density:1.2
	}
	//Create the Bodies Here.
	Matter.Bodies.circle(0,0,20,ball_options);
	World.add(world,ball)
	ellispeMode(RADIUS);

	ground = new Ground(200,390,400,20);
	
	ls = new Ground(1100,600,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20)
  ground.show();

	function KeyPressed(){
		if (keyCode == UP_ARROW){
			function hForce()
			function vForce()
			
		}
	}	


  drawSprites();
 
}



function hForce(){
  Matter.Body.applyForce(ball, {x:0,y:0},{x:0.05,y:0})

}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}