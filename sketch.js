
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(100, 650, 1800, 15);
	boy = new Boy(110, 610);
	stone = new Stone(85, 610, 60, 60);
	tree = new Tree(580, 460);
	mango1 = new Mango(570, 450);
	mango2 = new Mango(520, 440);
	mango3 = new Mango(660, 420);
	mango4 = new Mango(600, 400);
	mango5 = new Mango(540, 370);
	slingshot = new Slingshot(stone.body, { x: 100, y: 600 });
	Engine.run(engine);

}


function draw() {
	background("yellow");
	ground.display();
	boy.display();
	stone.display();
	tree.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	slingshot.display();
	detectollision(stone,mango1);
	detectollision(stone,mango2);
	detectollision(stone,mango3);
	detectollision(stone,mango4);
	detectollision(stone,mango5);
	drawSprites();
}


function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, { x: 265, y: 420 })
		slingshot.fly();
	}
}

function detectollision(lstone,lmango)
{
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

	if (distance<=lmango.r+ lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}

}




