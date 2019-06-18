
var mySong;
var myCuteBall;
var Ms;
var My;
var balls = [];
var colors = [
  '#D0104C',
  '#DB4D6D',
  '#EEA9A9',
  '#AB3B3A',
  '#E83015',
  '#F17C67',
  '##FCFAF2',
  '#FFFFFB',
  '#F596AA'
];
var z=3;
function preload() {
  mySong = loadSound("./assets/videoplayback.m4a");
}
function setup() {
  analyser = new p5.Amplitude();
analyser.setInput(mySong);
var volume = analyser.getLevel();
z = map(volume, 0, 3, 100, 450);
 frameRate(60);
mySong.play();
  createCanvas(windowWidth, windowHeight);
  frameRate(12);
  background(0);
  strokeWeight(0.15);

}
function Ball(_x, _y) {
  this.size = 10;
  this.x = _x;
  this.y = _y;
  this.color =  color(random(colors));
  this.speed1 = 2;
  this.speed1 = 1;
  // Methods
  var yDir = 1;
  var xDir = 1;

  this.move = function() {
      this.x += this.speed1 * xDir;
    this.y += this.speed2 * yDir;
    if (this.y > height || this.y < 0) {
      yDir = yDir * -1;
    }
    if (this.x > width || this.x < 0) {
      xDir = xDir * -1
    }
  }

  this.display = function() {
    fill(this.color);
     noStroke();
    ellipse(this.x, this.y, this.size);
  }

}


function mouseDragged() {
  var ballNumber = 3;

  for (var i = 0; i < ballNumber; i++) {

    var myBall = new Ball(mouseX, mouseY, 10);
    myBall.speed1 = random(-1, 1);
    myBall.speed2 = random(-1, 1);
    balls.push(myBall);
  }
}
function draw() {
  fill('white');
   text('DRAG YOUR MOUSE TO PLAY WITH MUSIC ', windowWidth/8, height/5);
  for (var j = 0; j < balls.length; j++) {

      balls[j].move();
      balls[j].display();

    }

  translate(width/2,height/2);

  rotate(frameCount*4)
  noFill();

  angleMode(CENTER);
  stroke(lerpColor(color('#DB7093'), color('#00FF7F'), frameCount/120));

  ellipse(60,10,100,100);
  ellipse(-60,-10,100,100);
  ellipse(-10,60,100,100);
  ellipse(10,-60,100,100);

  polygon(0,0,80,7);

  line(0,0,10,10);

  strokeWeight(0.1);
  polygon(0,0,160,7);
  ellipse(100,0,160,280);
  strokeWeight(0.08);
  ellipse(90,0,280,320);

  scale(frameCount/50);
  strokeWeight(0.1);
  polygon(0,0,100,5);

  if (frameCount == 45) {
    frameCount=0;
    frameRate(100);
    background(0);
  }


    function polygon(x, y, radius, npoints) {
    var angle = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = x + cos(a) * radius;
      var sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
    }


}
function mousePressed() {
  if (mySong.isPlaying()) {
    // .isPlaying() returns a boolean
    mySong.stop();
    background(0);
  } else {
    mySong.play();
    background(0);
  }
}
