
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var sling;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1150,190,30);
	mango2=new mango(1090,160,30);
	mango3=new mango(1050,210,30);
	mango4=new mango(1010,60,30);
	mango5=new mango(940,250,30);
	mango6=new mango(950,130,30);
	mango7=new mango(1190,125,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new Stone(230,400,50);

	slingShot=new SlingShot(stoneObj.body,{x:250,y:420});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  groundObject.display();
  slingShot.display();

  

  	detectCollision(stoneObj,mango1);
	detectCollision(stoneObj,mango2);
	detectCollision(stoneObj,mango3);
	detectCollision(stoneObj,mango4);
	detectCollision(stoneObj,mango5);
	detectCollision(stoneObj,mango6);
	detectCollision(stoneObj,mango7);

}
  
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingShot.fly();
}

function detectCollision(stoneObj,mango){
	stoneBodyPosition=stoneObj.body.position;
	 mangoBodyPosition=mango.body.position;
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if (distance<=mango.r+stoneObj.r){
	  Matter.Body.setStatic(mango.body,false);
	}
  }
  

