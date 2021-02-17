class Stone {
    constructor(x, y,r) {
      var options = {
          isStatic:false,
          'restitution':0,
          'friction':1,
          'density':1.2
          
        
      }
      this.x=x;
      this.y=y;
      this.radius=r/2;
      
      this.body=Bodies.circle(this.x,this.y,r/2,options);
      this.image=loadImage("images/stone.png");
      
      World.add(world, this.body);
    }
    display(){
      var stonepos =this.body.position;
      
      push();
      translate(stonepos.x, stonepos.y);
      rectMode(CENTER)
      strokeWeight(4);
      stroke("white");
      fill("white");
     image(this.image,0,0,this.radius*2,this.radius*2);
      pop();
    }
  };
  