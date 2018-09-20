// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth; //width of the browser viewport
var height = canvas.height = window.innerHeight; //height of the browser viewport

// define variable for ball count paragraph

var para = document.querySelector('p');
var count = 0;

// function to generate random number

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min + 1)) + min;
  return num;
}

//Shape Class
function Shape(x, y, velX, velY, exists) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.exists = exists;
}

//Ball constructor, inheriting from Shape
function Ball(x, y, velX, velY, exists, color, size) {
  Shape.call(this, x, y, velX, velY, exists);
  this.color = color;
  this.size = size;
}

Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;


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

//BALL COLLISION DETECTION
Ball.prototype.collisionDetect = function() {
  for(var j = 0; j < balls.length; j++) {
    if(!(this === balls[j])) {
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size && balls[j].exists) {
        balls[j].color = this.color = 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')';
      }
    }
  }
}

//EvilCircle constructor inheriting from shape
function EvilCircle(x, y, exists) {
  Shape.call(this, x, y, 20, 20, exists);
  this.color = 'white';
  this.size = 10;
}

EvilCircle.prototype = Object.create(Shape.prototype);
EvilCircle.prototype.constructor = EvilCircle;

//EvilCircle draw method
EvilCircle.prototype.draw = function() {
  ctx.beginPath();
  ctx.strokeStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.stroke();
}

//EvilCircle checkBounds method

EvilCircle.prototype.checkBounds = function() {
  if((this.x + this.size) >= width) {
    this.x -= this.size;
  }

  if((this.x - this.size) <= 0) {
    this.x += this.size;
  }

  if((this.y + this.size) >= height) {
    this.y -= this.size;
  }

  if((this.y - this.size) <= 0) {
    this.y += this.size;
  }
}

// define EvilCircle setControls method

EvilCircle.prototype.setControls = function() {
  var _this = this;
  window.onkeydown = function(e) {
    if(e.keyCode === 65) { // a
      _this.x -= _this.velX;
    } else if(e.keyCode === 68) { // d
      _this.x += _this.velX;
    } else if(e.keyCode === 87) { // w
      _this.y -= _this.velY;
    } else if(e.keyCode === 83) { // s
      _this.y += _this.velY;
    }
  }
}

// define EvilCircle collision detection

EvilCircle.prototype.collisionDetect = function() {
  for(var j = 0; j < balls.length; j++) {
    if( balls[j].exists ) {
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].exists = false;
        count--;
        para.textContent = 'Ball count: ' + count;
      }
    }
  }
}



//ANIMATING THE BALL
var balls = [];

// define loop that keeps drawing the scene constantly
var evil = new EvilCircle(random(0,width), random(0,height), true);
evil.setControls();

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
      true,
      'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
      size
    );
    balls.push(ball);
    count++;
    para.textContent = 'Ball count: ' + count;
  }

  for (var i = 0; i < balls.length; i++) {
    if(balls[i].exists) {
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();
    }
  }

  evil.draw();
  evil.checkBounds();
  evil.collisionDetect();

  requestAnimationFrame(loop);
}



loop();

