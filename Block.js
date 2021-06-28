class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.image = loadImage("block.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.visibility=255;

      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      if(this.body.speed<3){
        var angle = this.body.angle;
   
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
        pop();
      }
      else{
    
        World.remove(world,this.body);
        push();
        this.visibility=this.visibility-5;
            tint(255,this.visibility);


        pop();
      }
    }
  
 
    }
