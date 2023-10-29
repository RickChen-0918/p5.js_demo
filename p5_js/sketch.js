let balls = [];

function setup() {
    createCanvas(width, height);
}

function draw() {
  background(0)
  balls.forEach(function(ball){
    ball.draw();
    ball.update();
  });
}

function makeBall(){
  balls.push(new Ball(rand(20,width-20),rand(20,height-20),20));
  document.getElementById("ballCount").innerHTML = balls.length;
}
  