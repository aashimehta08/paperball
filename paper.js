class Paper {
    constructor(x,y,r){
        var option = {
            'restitution': 0.3,
            'isStatic':false,
            'friction': 0,
            'density': 1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x,y,r,option);
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }

    display(){
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      image(this.image,0,0,this.r);
      pop();
      
    }
}