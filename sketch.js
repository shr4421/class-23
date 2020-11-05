// name spacing
const Engine=Matter.Engine;//engine is like universe
const World=Matter.World;//world is like earth
const Bodies=Matter.Bodies;//bodies are objects on the earth

var engine1,world1;
var box1,box2,ground;

function setup() {

  createCanvas(800,400);

  engine1=Engine.create();// creating engine1(univerese).
  world1=engine1.world;// created world 1 inside engine 1.

  box1=new Box(200,300,50,50);
  box2=new Box(240,100,50,100);
  ground=new Ground(200,390,400,20);
}

function draw() {
background("white");
Engine.update(engine1);

box1.display();
box2.display();
ground.display();

  drawSprites();
}