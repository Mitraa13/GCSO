
var car,wall,car1,wall1,car2,wall2,car3,wall3;
var speed,weight,speed1,weight1,speed2,weight2,speed3,weight3;
var line1,line2,line3;
var top,bottom,left,right;

function setup() {
  
  createCanvas(1600,400);
  
  speed=random(55,90);
  weight=random(400,1500);
  speed1=random(55,90);
  weight1=random(400,1500);
  speed2=random(55,90);
  weight2=random(400,1500);
  speed3=random(55,90);
  weight3=random(400,1500);

  car = createSprite(50,50,30,10);
  car.velocityX=speed;
  car.shapeColor="lightblue";
  car1 = createSprite(50,150,30,10);
  car1.velocityX=speed1;
  car1.shapeColor="ightblue";
  car2 = createSprite(50,250,30,10);
  car2.velocityX=speed2;
  car2.shapeColor="ightblue";
  car3 = createSprite(50,350,30,10);
  car3.velocityX=speed3;
  car3.shapeColor="ightblue";

  wall = createSprite(1500,50,20,40);
  wall.shapeColor="lightpink";
  wall1 = createSprite(1500,150,20,40);
  wall1.shapeColor="lightpink";
  wall2 = createSprite(1500,250,20,40);
  wall2.shapeColor="lightpink";
  wall3 = createSprite(1500,350,20,40);
  wall3.shapeColor="pink";

  line1 = createSprite(800,100,1600,5);
  line1.shapeColor="white";
  line2 = createSprite(800,200,1600,5);
  line2.shapeColor="white";
  line3 = createSprite(800,300,1600,5);
  line3.shapeColor="white";
  
  top = createSprite(800,0,1600,10);
  bottom = createSprite(800,400,1600,10);  
  left = createSprite(1600,200,10,400);
  right = createSprite(0,200,10,400);


} 

function draw() {
  
  background(0);  

  if(wall.x-car.x < (car.width+wall.width)/2 )
  {
    car.velocityX=0;
    var deformation = 0.5*weight*speed*speed/22500;
      if(deformation>180){
        car.shapeColor=color("red");
        fill("red");
        stroke("red");
        text("Lethal",1520,40);
      }
      if(deformation<180 && deformation>100)
      {
        car.shapeColor=color("yellow");
        fill("yellow");
        stroke("yellow");
        text("Average",1520,40);
      }
      if(deformation<100){
        car.shapeColor=color("green");
        fill("green");
        stroke("green");
        text("Good",1520,40);
      }
  }

  if(wall1.x-car1.x < (car1.width+wall1.width)/2 )
  {
    car1.velocityX=0;
    var deformation1 = 0.5*weight1*speed1*speed1/22500;
      if(deformation1>180){
        car1.shapeColor=color("red");
        fill("red");
        stroke("red");
        text("Lethal",1520,140);        
      }
      if(deformation1<180 && deformation1>80)
      {
        car1.shapeColor=color("yellow");
        fill("yellow");
        stroke("yellow");
        text("Average",1520,140);
      }
      if(deformation1<80){
        car1.shapeColor=color("green");
        fill("green");
        stroke("green");
        text("Good",1520,140);
      }
  }

  if(wall2.x-car2.x < (car2.width+wall2.width)/2 )
  {
    car2.velocityX=0;
    var deformation2 = 0.5*weight2*speed2*speed2/22500;
      if(deformation2>180){
        car2.shapeColor=color("red");
        fill("red");
        stroke("red");
        text("Lethal",1520,240);
      }
      if(deformation2<180 && deformation2>100)
      {
        car2.shapeColor=color("yellow");
        fill("yellow");
        stroke("yellow");
        text("Average",1520,240);
      }
      if(deformation2<100){
        car2.shapeColor=color("green");
        fill("green");
        stroke("green");
        text("Good",1520,240);
      }
  }

  if(wall3.x-car3.x < (car3.width+wall.width)/2 )
  {
    car3.velocityX=0;
    var deformation3 = 0.5*weight*speed*speed/22500;
      if(deformation3>180){
        car3.shapeColor=color("red");
        fill("red");
        stroke("red");
        text("Lethal",1520,340);
      }
      if(deformation3<180 && deformation>100)
      {
        car3.shapeColor=color("yellow");
        fill("yellow");
        stroke("yellow");
        text("Average",1520,340);
      }
      if(deformation3<100){
        car3.shapeColor=color("green");
        fill("green");
        stroke("green");
        text("Good",1520,340);
      }
  }

  drawSprites();
}