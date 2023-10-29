class Ball{
    constructor(x,y,d){
      this.x=x;
      this.y=y;
      this.d=rand(20,50);
      this.velx=rand(-5,5);
      this.vely=rand(-5,5);
    }
    update(){
      this.x += this.velx
      this.y += this.vely
      if (this.x > width-(this.d/2) || this.x < (this.d/2)){
          this.velx *= -1
      }
      if (this.y > width- (this.d/2) || this.y < (this.d/2)){
        this.vely *= -1
      }
    }
    draw(){
      ellipse(this.x, this.y, this.d);
    }   
}    