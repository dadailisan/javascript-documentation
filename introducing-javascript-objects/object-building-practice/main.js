// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth; //width of the browser viewport
var height = canvas.height = window.innerHeight; //height of the browser viewport

// function to generate random number

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min + 1)) + min;
  return num;
}

//PROPERTIES OF THE BALL
function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}

//DRAWING THE BALL
Ball.prototype.draw = function() {
  ctx.beginPath(); //state that we want to draw a shape on the canvas
  ctx.fillStyle = this.color; //color the drawn shape
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  //The this.x and this.y is the position of the arc's center
  //The this.size -->The radius of our arc
  //The 0 and 2*Math.PI --> specify the start and end number of degrees round the circle that the arc is drawn between. 1*PI will only result to 180degrees
  ctx.fill(); //states "finish drawing the path we started with beginPath()
}

// var testBall = new Ball(50, 100, 4, 4, 'blue', 10);


//UPDATING THE BALL'S DATA
Ball.prototype.update = function() {
//the ball is going off the right hand edge
  if ((this.x + this.size) >= width) { 
    this.velX = -(this.velX);
  }
//the ball is going off the left hand edge
  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }
//the ball is going off the bottom edge
  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }
//the ball is going off the top edge
  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}



//ANIMATING THE BALL
var balls = [];

function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  while (balls.length < 25) {
    var size = random(10,20);
    var ball = new Ball(
      // ball position always drawn at least one ball width
      // away from the edge of the canvas, to avoid drawing errors
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-7,7),
      random(-7,7),
      'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
      size
    );
    balls.push(ball);
  }

  for (var i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }

  requestAnimationFrame(loop);
}

//COLLISION DETECTION
Ball.prototype.collisionDetect = function() {
  for (var j = 0; j < balls.length; j++) {
    if (!(this === balls[j])) {
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
      }
    }
  }
}

loop();









