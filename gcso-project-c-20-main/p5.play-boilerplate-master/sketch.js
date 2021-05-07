var bullet, wall;
var bullet,speed, weight;
var thickness


function setup() {
  createCanvas(1600,400);
  thickness=random (22,83)
  speed=random (223,321)
  weight=random (30,52)
  car=createSprite (50,200,50,50)
  car.velocityX= speed;
   wall=createSprite (1200,200,thickness,height/2)
}

function draw() {
  background("black");
  if(hasCollided(bullet, wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed /(thickness * thickenss * thickness);


    if(damage>10)
    {
        wall.shapecolor=color(255,0,0);


    }



    if(damage<10)
    {
        wall.shapecolor=color(0,255,0)
    }




  }
  hasCollided()
  drawSprites();
}
function hasCollided(Lbullet, Lwall)
{
     bulletRightEdge=lbullet.x +lbullet.width;
     wallLeftEdge=lwall.x;
     if (bulletRightEdge>=wallLeftEdge)
     {
         return true
     }
     return false;
}