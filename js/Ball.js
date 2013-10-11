// ==========
// BALL STUFF
// ==========

// A generic constructor which accepts an arbitrary descriptor object
function Ball(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}

// Default proporties
Ball.prototype.dying = false;

Ball.prototype.cx = g_canvas.width*0.05;
Ball.prototype.cy = g_canvas.height/2;
Ball.prototype.radius = 10

Ball.prototype.speed = 10;
Ball.prototype.xVel = 5;
Ball.prototype.yVel = 5;

Ball.prototype.color = "white";

Ball.prototype.update = function (du) {
    var prevX = this.cx;
    var prevY = this.cy;
    
    var nextX = prevX + this.xVel * du;
    var nextY = prevY + this.yVel * du;
    
    // Bounce off top and bottom edges
    if (nextY < 0 || nextY > g_canvas.height) {
        this.yVel *= -1;
    }
    if (nextX < 0 || nextX > g_canvas.width) {
        this.xVel *= -1;
    }

    this.cx += this.xVel * du;
    this.cy += this.yVel * du;
};

Ball.prototype.render = function (ctx) {
    fillCircle(ctx, this.cx, this.cy, this.radius, this.color);
};