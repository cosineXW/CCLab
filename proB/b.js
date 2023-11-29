let index = 0;
let flowerImages = [];
let bubbleImages = [];
let zoImages=[];
let sunflower;
let wogua;
let sheshou;
let piano;
let mic;
let d1;
let d2;
let d3;
let d4;
let d5;
let d6;
let flowers = [];
let bubbles = [];
let zb
let zos=[];
let img;
let bgm;
let i;
let drum;
let drumbutton;

let at;
function preload() {
  drum = loadImage("pb/32.png");
  piano=loadImage("pb/5.png")
  sheshou=loadImage('pb/16.gif')
  mic = loadImage("pb/2.png");
  drumbutton = loadImage('R.jpg');
  sunflower = loadImage('pb/17.gif');
  img = loadImage("pb/1.jpg");
  at = loadImage("B.jpg");
  bgm = loadSound("bgm.ogg");
  zb=loadImage('Z.jpg')
  d1 = loadSound("drum/d1.mp3");
  d2 = loadSound("drum/d2.mp3");
  d3 = loadSound("drum/d3.mp3");
  d4 = loadSound("drum/d4.mp3");
  d5 = loadSound("drum/d5.mp3");
  d6 = loadSound("drum/d6.mp3");
  wogua=loadImage('pb/6.gif')
  zo1=loadImage('pb/8.gif')
  zo2=loadImage('pb/92.gif')
  
  zo3=loadImage('pb/12.gif')
  zo4=loadImage('pb/13.gif')
  for (let i = 0; i < 9; i++) {
    let url = "../flower/h" + parseInt(i + 1) + ".png";
    flowerImages.push(loadImage(url));
  }
  for (let i = 0; i < 7; i++) {
    let url = "../bubble/b" + parseInt(i + 1) + ".png";
    bubbleImages.push(loadImage(url));
  }
  
}

function setup() {
  console.log(zo3,zo4)
  index = 0
  zos.push(zo1,zo2)
  for (let i = 0; i < 12; i++) {
    zoImages.push(new zo());
  }
  let canvas = createCanvas(1200, 750);
  // console.log(document.getElementsByClassName("bluebox"));
  canvas.parent("bluebox")
  console.log(flowerImages);


}





function draw() {
  console.log(index)
  

  background(220)
  image(img, 0, 0)
  image(drumbutton, 10, 710)
  image(at, 50, 710)
  image(zb, 90, 710)
  image(sunflower, 550, 440)
  image(wogua, 660,300)
  image(mic,560,350)
  
  image(drum,700,350)
  
 image(sheshou,300,450)

 
 
  image(piano,420,500)
 
  for (let i = 0; i < zoImages.length; i++) {
    zoImages[i].update()
    zoImages[i].display()
  }
  
  if (!bgm.isPlaying()) {
    bgm.loop();
  }
  // image(drum, 0, 0);

  for (let i = 0; i < flowers.length; i++) {
    flowers[i].update()
    flowers[i].display()
    if (flowers[i].y > height) {
      flowers.splice(i, 1);

    }
  }
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].update()
    bubbles[i].display()
    if (bubbles[i].y <0) {
      bubbles.splice(i, 1);
    }
  }

  

  // console.log(bgm.isPlaying);
  if (keyIsPressed === true) {
    if(index == 2){//撒花
      if (key == "n") {
   
       for (let i = 0; i < 100; i++) {
         flowers.push(new flower(random(0, width)));
         console.log('testtesttest');
       }
     }
      if (key == "b") {
       for (let i = 0; i < 40; i++) {
         bubbles.push(new bubble(random(0, width)));
       }
     }
     if (key == "m") {
      for (let i = 0; i < 20; i++) {
        cds.push(new cd(random(0, height)));
      }
    }
    } 

  }
}


function keyPressed() {
  if (index == 1) {//敲鼓
    
    if (key == "a") {
      if (!d1.isPlaying()) {
        d1.play();
        console.log('play1');

      }
    }
    if (key == "s") {
      if (!d2.isPlaying()) {
        d2.play();
        console.log('play1');

      }
    }
    if (key == "d") {
      if (!d3.isPlaying()) {
        d3.play();
        console.log('play1');

      }
    }

    if (key == "f") {
      if (!d4.isPlaying()) {
        d4.play();
          console.log('play1');

      }
    }
    if (key == "g") {
      if (!d5.isPlaying()) {
        d5.play();
        console.log('play2');

      }
    }
    if (key == "h") {
      if (!d6.isPlaying()) {
        d6.play();
        console.log('play3');

      }
    }
  }

}

function mouseClicked() {
  if (mouseX < 40 && mouseX > 10 && mouseY > 710 && mouseY < 740) {
    index = 1;
  }
  if (mouseX < 80 && mouseX > 50 && mouseY > 710 && mouseY < 740) {
    index = 2;
  }
  if (mouseX > 90 && mouseX < 120 && mouseY > 710 && mouseY < 740) {
    console.log("aaaa")
    index = 3;
  }
}

class bubble {
  constructor(x) {
    this.x = x;
    this.y = random(750,1250);
    this.xspd = 0;
    this.yspd = 0;
    this.yA = random(0.05, 0.1);
    this.s = random(0.2, 0.3)
    this.rotateAng = 0;
    this.imageIndex = floor(random(0, 7));


  }
  display() {
    push();
    translate(this.x, this.y);
    scale(this.s);
    rotate(this.rotateAng);
    image(bubbleImages[this.imageIndex], 0, 0);
    pop();
  }
  update() {
    this.xspd = map(noise(sin(frameCount * 0.01)), 0, 1, -0.1, 0.1);
    this.yspd += this.yA;
    this.rotateAng = map(sin(frameCount * 0.01), -1, 1, 0, PI / 6);
    this.x += this.xspd;
    this.y -= this.yspd;

  }
}


class flower {
  constructor(x) {
    this.x = x;
    this.y = random(-300, 0);
    this.xspd = 0;
    this.yspd = 0;
    this.yA = random(0.1,0.2);
    this.s = random(0.2, 0.3)
    this.rotateAng = 0;
    this.imageIndex = floor(random(0, 7));


  }
  display() {
    push();
    translate(this.x, this.y);
    scale(this.s);
    rotate(this.rotateAng);
    image(flowerImages[this.imageIndex], 0, 0);
    pop();
  }
  update() {
    this.xspd = map(noise(sin(frameCount * 0.01)), 0, 1, -0.1, 0.1);
    this.yspd += this.yA;
    this.rotateAng = map(sin(frameCount * 0.01), -1, 1, 0, PI / 5);
    this.x += this.xspd;
    this.y += this.yspd;

  }

}

class cd {
  constructor(y) {
    this.x = random(-300, 0);
    this.y = y;
    this.xspd = 0;
    this.yspd = 0;
    this.yA = random(0.1,0.2);
    this.s = random(0.2, 0.3)
    this.rotateAng = 0;
    this.imageIndex = floor(random(0, 7));


  }
  display() {
    push();
    translate(this.x, this.y);
    scale(this.s);
    rotate(this.rotateAng);
    image(flowerImages[this.imageIndex], 0, 0);
    pop();
  }
  update() {
    this.xspd = map(noise(sin(frameCount * 0.01)), 0, 1, -0.1, 0.1);
    this.yspd += this.yA;
    this.rotateAng = map(sin(frameCount * 0.01), -1, 1, 0, PI / 5);
    this.x += this.xspd;
    this.y += this.yspd;

  }

}

class zo {
  constructor() {
    this.x = random(50,1150);
    this.y = random(500,600);
    this.xspd = 0;
    this.yspd = 0;
    this.yA = random(0.1,0.2);
    this.image = zos[floor(random(0,2))];
    this.s = 1
    this.rotateAng = 0;
    this.freq = random(0.01, 0.06);



  }
  display() {
    push();
    translate(this.x, this.y);
    scale(this.s);
    rotate(this.rotateAng);
    image(this.image, this.xspd,this.yspd);
    pop();
  }
  update() {
    this.xspd = map(noise(sin(frameCount * this.freq)), 0, 1, -20, 20);
    this.yspd = map(noise(sin(frameCount * this.freq)), 0, 1, -10,10);
  if(index==3){
      if(this.image==zos[0]){
        
        this.image= zo3;
        console.log("zo333333333",this.image);
      }else if(this.image==zos[1]){
     this.image= zo4;
     console.log("zo4444444444", this.image);
      }
        this.s=map(noise(sin(frameCount *this.freq)), 0, 1, 0.8,1.2)
this.rotateAng = map(sin(frameCount * this.freq), -1, 1, 0, PI / 5);
  }
    


  }

}