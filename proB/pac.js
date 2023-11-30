const totalBeans =25;
const beansSize = 15;
let player;
let beans = [];
let monsters = [];
let monsterSize = 30;
let score = 0;
let isMouseClicked = false;
let zobi;
let sun;
let obstacles = [];
let obstacleWidth = 250;
const obstacleHeight = 20;

function preload(){
    zobi=loadImage('Z.jpg')
    sun=loadImage('pb/11.png')
}
function setup() {
  createCanvas(850,850);
  player = {x: width / 2, y: height / 2, speed: 5, size: 30};

  for (let i = 0; i < totalBeans; i++) {
    beans.push({x: random(width - beansSize), y: random(height - beansSize)});
  }

  for (let i = 0; i < 7; i++) {
    monsters.push({x: random(width), y: random(height), speed: 2});
  }

  for (let i = 0; i < 10; i++) {
    obstacles.push({x: random(width - obstacleWidth), y: random(height - obstacleHeight)});
  }
}

function draw() {
  background(220);
  showPlayer();
  fill(255)
  textSize(20);
  text("click to start", 370,420);
  if (isMouseClicked === true){
  movePlayer()
}

  if (isMouseClicked) {
    for (let monster of monsters) {
      moveMonster(monster);
    }
    for (let obstacle of obstacles) {
      obstacle.x += random(-4, 4);
      obstacle.y += random(-4, 4);
    }
  }
  for (let bean of beans) {
    showBean(bean);
  }
  for (let monster of monsters) {
    showMonster(monster);
  }
  for (let obstacle of obstacles) {
    showObstacle(obstacle);
  }
  if (checkCollision()) {
    gameOver();
  }
  for (let i = beans.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, beans[i].x, beans[i].y) < (player.size + beansSize) / 2) {
      score += 1;
      beans.splice(i, 1);
      if (beans.length % 5 == 0) {
        monsterSize += 15;
        obstacleWidth += 10;
        monsterSize = constrain(monsterSize, 30, 70);
      }
    }
  }

  for (let i = monsters.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, monsters[i].x, monsters[i].y) < monsterSize / 2) {
      gameOver();
    }
  }

  textSize(32);
  fill(0);
  text("Score: " + score, 10, 30);

  if (score === totalBeans) {
    strokeweight(10)
    textSize(50);
    background(0, 0, 0, 0);
    isMouseClicked = false;
  }
}

function mouseClicked() {
  isMouseClicked = true;
}

function showPlayer() {
  fill(255, 0, 0);
  ellipse(player.x, player.y, player.size);
}

function movePlayer() {
  if (keyIsDown(UP_ARROW)) {
    player.y -= player.speed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    player.y += player.speed;
  }
  if (keyIsDown(LEFT_ARROW)) {
    player.x -= player.speed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.x += player.speed;
  }

  player.x = constrain(player.x, 0, width);
  player.y = constrain(player.y, 0, height);
}

function checkCollision() {
  for (let obstacle of obstacles) {
    if (
      player.x + player.size / 2 > obstacle.x &&
      player.x - player.size / 2 < obstacle.x + obstacleWidth &&
      player.y + player.size / 2 > obstacle.y &&
      player.y - player.size / 2 < obstacle.y + obstacleHeight
    ) {
      return true;
    }
  }
  return false;
}

function showBean(bean) {
  
  image(sun,bean.x,bean.y)
  
}

function showMonster(monster) {
  image(zobi,bean.x,bean.y)

}

function moveMonster(monster) {
  monster.x += 4 * random(-monster.speed, monster.speed);
  monster.y += 4 * random(-monster.speed, monster.speed);

  monster.x = constrain(monster.x, 0, width);
  monster.y = constrain(monster.y, 0, height);
}

function showObstacle(obstacle) {
  fill(0);
  rect(obstacle.x, obstacle.y, obstacleWidth, obstacleHeight);
}

function gameOver() {
  noLoop();
  background(0);
  fill(255);
  textAlign(CENTER);
  textSize(30);
  text("Game Over", width / 2, height / 2 + 30);
  text("Restart: push SPACE to restart", width / 2, height / 2 - 30);
}
function keyPressed() {
  if (keyCode === 32) { 
    resetGame();
  }
}

function resetGame() {
  isMouseClicked = false;
 player.x = width / 2;
  player.y = height / 2;
monsterSize = 30
  
  score = 0;

  beans = [];
  for (let i = 0; i < totalBeans; i++) {
    beans.push({x: random(width - beansSize), y: random(height - beansSize)});
  }

  monsters = [];
  for (let i = 0; i < 7; i++) {
    monsters.push({x: random(width), y: random(height), speed: 2});
  }
  obstacles = [];
  for (let i = 0; i < 10; i++) {
    obstacles.push({x: random(width - obstacleWidth), y: random(height - obstacleHeight)});
  }
  
  loop();
}