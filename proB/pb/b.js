let index = 0;
let flowerImages = [];
let bubbleImages=[]
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
let bubbles=[]
let zo1
let zo2
let zo3
let zo4

let img;
let bgm;
let i;
let drum;
let drumbutton;
let at;
function preload(){
  drum = loadImage("pb/32.png")
  drumbutton=loadImage('R.jpg')
  sunflower=loadImage('pb/17.gif')
  img=loadImage("pb/1.jpg");
  at=loadImage("B.jpg")
  bgm=loadSound("bgm.ogg");
  xcz1=loadImage("pb/6.gif")
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
  for(let i = 0; i < 7; i ++){
    let url = "bubble/h" + parseInt(i+1) + ".png";
    flowerImages.push(loadImage(url));
  }
}

function setup() {
  index=0
  let canvas = createCanvas(1200, 750);
  // console.log(document.getElementsByClassName("bluebox"));
  canvas.parent("bluebox")
    console.log(flowerImages);
    xcz=xcz1

}
  




function draw(){
  console.log(index)

background(220)  
image(img,0,0)
image(drumbutton,10,710)
image(at,50,710)
image(sunflower,550,440)

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
for(let i = 0; i < bubbles.length; i ++){
  bubbles[i].update()
  bubbles[i].display()
}

// console.log(bgm.isPlaying);
function keyPressed(){
 
  if(index=1){//敲鼓
    if(key == "a"){
      if(!d1.isPlaying()){
        d1.play();
        }
      }
      if(key == "s"){
        if(!d2.isPlaying()){
          d2.play();
          }
        }
        if(key == "d"){
          if(!d3.isPlaying()){
            d3.play();
            }

            if(key == "f"){
              if(!d4.isPlaying()){
                d4.play();
                }
              }
              if(key == "g"){
                if(!d5.isPlaying()){
                  d5.play();
                  }
                }
                if(key == "h"){
                  if(!d6.isPlaying()){
                    d6.play();
                    }
                  }
          }

  }
  if(index == 2){//撒花
    if(key == "f"){
      for(let i = 0; i < 100; i ++){
        flowers.push(new flower(random(0, width)));
      }
    }
  if(key=="b"){
    for(let i = 0; i < 40; i ++){
      bubbles.push(new bubble(random(0, width)));
    }

  }

  }
  
}
}

function mouseClicked(){
  if(mouseX < 40 && mouseX > 10 && mouseY > 710 && mouseY < 740){
    index = 1;
  }
  if(mouseX < 80 && mouseX > 50 && mouseY > 710 && mouseY < 740){
    index = 2;
  }
}

class bubble{
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
  
