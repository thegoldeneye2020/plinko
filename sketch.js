const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var division;
//var divisionHeight=300;
var division=[];
var plinkos=[];
var particles=[];



function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;

  //createSprite(400, 200, 50, 50);

  ground=new Ground(0,780,800,20);
  division=new Divisions(-10,495,20,300);
  division1=new Divisions(90,495,20,300);
  division2=new Divisions(170,495,20,300);
  division3=new Divisions(250,495,20,300);
  division4=new Divisions(330,495,20,300);
  division5=new Divisions(410,495,20,300);
  division6=new Divisions(490,495,20,300);
  division7=new Divisions(470,495,20,300);

  // making plinkos
 
  plinko1=new Plinko(60,60);
  plinko2=new Plinko(110,60);
  plinko3=new Plinko(160,60);
  plinko4=new Plinko(210,60);
  plinko5=new Plinko(260,60);
  plinko6=new Plinko(310,60);
  plinko7=new Plinko(360,60);
  plinko8=new Plinko(410,60);

  plinko9=new Plinko(10,120);
  plinko10=new Plinko(70,120);
  plinko11=new Plinko(130,120);
  plinko12=new Plinko(190,120);
  plinko13=new Plinko(250,120);
  plinko14=new Plinko(310,120);
  plinko15=new Plinko(370,120);
  plinko16=new Plinko(430,120);
  plinko17=new Plinko(490,120);

  plinko18=new Plinko(60,180);
  plinko19=new Plinko(110,180);
  plinko20=new Plinko(160,180);
  plinko21=new Plinko(210,180);
  plinko22=new Plinko(260,180);
  plinko23=new Plinko(310,180);
  plinko24=new Plinko(360,180);
  plinko25=new Plinko(410,180);

  plinko26=new Plinko(10,240);
  plinko27=new Plinko(70,240);
  plinko28=new Plinko(130,240);
  plinko29=new Plinko(190,240);
  plinko30=new Plinko(250,240);
  plinko31=new Plinko(310,240);
  plinko32=new Plinko(370,240);
  plinko33=new Plinko(430,240);
  plinko34=new Plinko(490,240);

  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10,width/2+10),10,10));
  }

  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }
 
}

function draw() {


  background("black");  
  Engine.update(engine);
  ground.display();
  division.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display(); 
   plinko19.display(); 
    plinko20.display();
    plinko21.display();
    plinko22.display();
    plinko23.display();
    plinko24.display();
    plinko25.display();
    plinko26.display();
    plinko27.display();
    plinko28.display();
    plinko29.display();
    plinko30.display();
    plinko31.display();
    plinko32.display();  
    plinko33.display();  
   plinko34.display();
  



  drawSprites();
}