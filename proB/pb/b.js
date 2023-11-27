let index = 0;
let flowerImages = [];
let xcz1
let xcz2
let xcz
let sunflower
let wogua
let mic
let d1
let d2
let d3
let d4
let d5
let d6
let flowers = [];
let img;
let bgm;
let i;
let drum;
function preload(){
  drum = loadImage("pb/32.png")
  img=loadImage("pb/1.jpg");
  bgm=loadSound("bgm.ogg");
  xcz1=loadImage("pb/6.gif")
  xcz2=loadImage("pb/8.gif")
  d1=loadSound("drum/d1.mp3")
  d2=loadSound("drum/d2.mp3")
  d3=loadSound("drum/d3.mp3")
  d4=loadSound("drum/d4.mp3")
  d5=loadSound("drum/d5.mp3")
  d6=loadSound("drum/d6.mp3")
  for(let i = 0; i < 9; i ++){
    let url = "flower/h" + parseInt(i+1) + ".png";
    flowerImages.push(loadImage(url));
  }
}

function setup() {
  let canvas = createCanvas(1200, 750);
  // console.log(document.getElementsByClassName("bluebox"));
  canvas.parent("bluebox")
    background(220)
    console.log(flowerImages);
    xcz=xcz1

}
  




function draw(){
  
  if(index==5){
  xcz=xcz2
}


background(220)  
image(img,0,0)
image(xcz,0,0)
if(!bgm.isPlaying()){
bgm.loop();
}
// image(drum, 0, 0);

for(let i = 0; i < flowers.length; i ++){
flowers[i].update()
flowers[i].display()
if(flowers[i].y > height){
  flowers.splice(i, 1);

}
}


// console.log(bgm.isPlaying);
}
function keyPressed(){
  if(key == f){
    index=1
  }

  if(index=1){//敲鼓
    if(key == "a"){
      if(!d1.isPlaying()){
        d1.play();
        }
      }



  }
  if(index == 5){//撒花
    if(key == "k"){
      for(let i = 0; i < 100; i ++){
        flowers.push(new flower(random(0, width)));
      }
  
    }
    
  }
  
}

function mouseClicked(){
  if(mouseX < 200 && mouseX > 0 && mouseY > 0 && mouseY < 200){
    
    index = 5;
    console.log(index);
  }
}


class flower{
  constructor(x){
  this.x =x;
  this.y = random(-500, 0);
  this.xspd =0;
  this.yspd = 0;
  this.yA = random(0.05,0.1);
  this.s=random(0.2,0.3)
  this.rotateAng = 0;
  this.imageIndex = floor(random(0, 7));

  
}
  display(){
    push();
    translate(this.x, this.y);
    scale(this.s);
    rotate(this.rotateAng);
    image(flowerImages[this.imageIndex], 0, 0);
    pop();
  }
  update(){
    this.xspd =map(noise(sin(frameCount * 0.01) ), 0 , 1, -0.1,0.1);
    this.yspd += this.yA;
    this.rotateAng = map(sin(frameCount * 0.01), -1, 1, 0, PI/6);
    this.x += this.xspd;
    this.y += this.yspd;
  
  }
  
  }
  
