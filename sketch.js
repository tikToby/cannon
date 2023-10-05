const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var balls=[];
let engine;
let world;

var tower;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}


function setup() {
  canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  rectMode(CENTER);
  ellipseMode(RADIUS);

  tower=new Tower(150,350,160,310);
  angle=-PI/4;
  cannon=new Cannon(180,110,90,50,angle);
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  tower.display();
  cannon.display();
  tower.display();

  for (var i=0; i <balls.length; i++){
    showcannonballs(balls[i],i);
  }

}

function shot(){
  if(keyCode===RIGHT_ARROW){
    var cannonBall=new CannonBall(cannon.x,cannon.y);
    Matter.Body.setAngle(cannonBall.body,cannon.angle);
    balls.push(cannonBall);
    cannonBall.shoot();
  }
}

function showcannonballs(ball,index){
  ball.display();
  if(ball.body.position.x>=width||ball.body.position.y>=height-50){
    Matter.World.remove(world,ball.body);
    ball.splice(index,1)
  }
}