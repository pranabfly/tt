
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

	Hammer1 = new Hammer(200,200,150,50)
	Hammer2 = new Hammer(300,40,130,30)

    plane1 = new Plane(600,height,1200,20)
    
}

function draw(){
    background(0);
    Engine.update(engine);
	Hammer1.display()
	Hammer2.display()
	plane1.display()
    
}