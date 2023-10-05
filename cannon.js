class Cannon{
    constructor(x,y,width,height,angle){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.angle=angle;
    }

    display(){
        if (keyIsDown(DOWN_ARROW)&& this.angle <0.35){
            this.angle+=0.02;
        }
        if (keyIsDown(UP_ARROW)&& this.angle>-1.45){
            this.angle-=0.02;
        }

        fill("#676e6a");
        push();
        translate(this.x,this.y);
        rotate(this.angle);
        rect(-2,-10,this.width,this.height);
        pop();
        arc(this.x -30, this.y +90, 70, 100, PI, TWO_PI);
    }
}