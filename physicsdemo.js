let width = 800;
let height = 600;
let gravity = 9.81
let ball;

class Ball{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.vx=0;
        this.vy=0;
        this.mass=1;
        this.diameter=50;
        this.prevt=millis()
    }

    update(){
        let elapsedTime = millis() - this.prevt
        this.vy += gravity*(elapsedTime/1000)
        this.y += this.vy*(elapsedTime/1000)
        if(this.y>height){
            this.y = height-this.diameter/2;
        }
    }

    draw(){
        ellipse(this.x,this.y,this.diameter);
    }
}

function setup(){
    createCanvas(width,height);
    ball=new Ball(width/2,50);
}

function draw(){
    background(220)
    ball.update()
    ball.draw();
}
