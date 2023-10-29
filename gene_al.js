let width = 800;
let height = 600;
let bots;

class DNA{
    constructor(){
        // 000000000000
        this.length = 12;
        this.dna = "";
        for(let i =0; i < this.length; i++){
            this.dna += str(int(random(0,2)));
        }
        print(this.dna);
    }
}

function generateChildren(poolSize){
    let pool = [];
    for(let i = 0; i < poolSize; i++){
        pool.push(new DNA());
    }
    return pool;
}

function loadBots(pool){
    let bots = [];
    for(let i = 0; i < pool.length; i++){
        let speed = parseInt(pool[i].dna.slice(0,2),2);
        let meta = parseInt(pool[i].dna.slice(2,6),2);
        let delta_A = parseInt(pool[i].dna.slice(6,12),2);
        bots.push(new Bot(width/2,height/2,speed,meta,delta_A));
    }
    return bots;
}

class Bot {
  constructor(x, y, speed, meta, delta_A) {
    this.x = x;
    this.y = y;
    this.life = 20
    this.meta = meta
    this.speed = speed/2;
    this.delta_A = delta_A
    this.angle = random(0,360);
  }

  draw() {
    ellipse(this.x,this.y,20);
  }

  update() {
    this.x += this.speed * cos(radians(this.angle));
    this.y += this.speed * sin(radians(this.angle));
    this.life -= this.meta / 60
  }
}

function setup() {
  createCanvas(width, height);
  let pool = generateChildren(10);
  bots = loadBots(pool);
}

function draw() {
  background(220);
  for(let i = 0; i < bots.length; i++){;
    bots[i].update();
    if(bots[i].life > 0){
        bots[i].draw();
    }
  }
}