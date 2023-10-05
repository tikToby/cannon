class Tower{
    constructor( x , y , width , height ){
        var opitions={
            isStatic:true
        }
        this.width=width;
        this.height=height;
        this.image=loadImage("./assets/tower.png");
        this.body=Bodies.rectangle(x,y,this.width,this.height,opitions);
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop()
    }

}