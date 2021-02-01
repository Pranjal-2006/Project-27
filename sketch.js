
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render; 
const Constraint = Matter.Constraint;
var roofObj, bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	roofObj = new roof(width/2, height/4, width/7, 20);
	bobDiameter = diameter(40);
	
	startBobPositionX=width/2;
	 startBobPositionY=height/4+500;
	 bobObj1 = new bob(startBobPositionX-bobDiameter*2, startBobPositionY, bobDiameter)
	 bobObj2 = new bob(startBobPositionX-bobDiameter, startBobPositionY, bobDiameter)
	 bobObj3 = new bob(startBobPositionX, startBobPositionY, bobDiameter)
	 bobObj4 = new bob(startBobPositionX+bobDiameter, startBobPositionY, bobDiameter)
	 bobObj5 = new bob(startBobPositionX+bobDiameter*2, startBobPositionY, bobDiameter)
	//Create the Bodies Here.
var render = Render.create({
	element:document.body,
	engine:engine,
	 options:{
		 width:1200,
		height:700,
		wireFrames:false
	 }
	})
rope1=new rope(bobObj1.body,roofObject.body,-bobDiameter*2, 0)
rope2=new rope(bobObj2.body,roofObject.body,-bobDiameter*1, 0)
rope3=new rope(bobObj3.body,roofObject.body,0, 0)
rope4=new rope(bobObj4.body,roofObject.body,-bobDiameter*1, 0)
rope5=new rope(bobObj5.body,roofObject.body,-bobDiameter*2, 0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roofObj.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
bobObj1.display();
bobObj2.display();
bobObj3.display();
bobObj4.display();
bobObj5.display();

  drawSprites();
 
}



