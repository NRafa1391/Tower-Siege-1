
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, base1, base2;
var polygon;
var polygon_img;

var Constraint;

function preload(){
	polygon_img = loadImage("polygon.png");
}

function setup(){
	var canvas = createCanvas(1600,400);
	engine = Engine.create();
	world = engine.world;

	polygon = Bodies.circle(50, 200, 20);
	image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);
	imageMode(CENTER);
	World.add(world,polygon);

	slingshot = new SlingShot(this.polygon, {x:100, y:100});

	ground = new Ground(800, 400, 1600, 10);
	base1 = new Ground(400, 350, 300, 10);
	base2 = new Ground(650, 190, 300, 10);

	box1 = new Box(330, 235, 30, 40);
	box2 = new Box(360, 235, 30, 40);
	box3 = new Box(390, 235, 30, 40);
	box4 = new Box(420, 235, 30, 40);
	box5 = new Box(450, 235, 30, 40);
	box6 = new Box(345, 190, 30, 40);
	box7 = new Box(375, 190, 30, 40);
	box8 = new Box(405, 190, 30, 40);
	box9 = new Box(435, 190, 30, 40);
	box10= new Box(360, 150, 30, 40);
	box11= new Box(390, 150, 30, 40);
	box12= new Box(420, 150, 30, 40);
	box13= new Box(375, 100, 30, 40);
	box14= new Box(405, 100, 30, 40);
	box15= new Box(390, 50, 30, 40);

	box16= new Box(590, 185, 30, 40);
	box17= new Box(620, 185, 30, 40);
	box18= new Box(650, 185, 30, 40);
	box19= new Box(680, 185, 30, 40);
	box20= new Box(710, 185, 30, 40);
	box21= new Box(605, 150, 30, 40);
	box22= new Box(635, 150, 30, 40);
	box23= new Box(665, 150, 30, 40);
	box24= new Box(695, 150, 30, 40);
	box25= new Box(620, 100, 30, 40);
	box26= new Box(650, 100, 30, 40);
	box27= new Box(680, 100, 30, 40);
	box28= new Box(635, 60, 30, 40);
	box29= new Box(665, 60, 30, 40);
	box30= new Box(650, 30, 30, 40);

}

function draw(){
	background(255);
	Engine.update(engine);

	console.log(polygon.x);

	ground.display();
	base1.display();
	base2.display();

	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();
	box7.display();
	box8.display();
	box9.display();
	box10.display();
	box11.display();
	box12.display();
	box13.display();
	box14.display();
	box15.display();

	box16.display();
	box17.display();
	box18.display();
	box19.display();
	box20.display();
	box21.display();
	box22.display();
	box23.display();
	box24.display();
	box25.display();
	box26.display();
	box27.display();
	box28.display();
	box29.display();
	box30.display();
}

function mouseDragged(){
	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	slingshot.fly();
}