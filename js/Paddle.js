// A generic constructor which accepts an arbitrary descriptor object
function Paddle(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}

// Default proporties
Paddle.prototype.cx = g_canvas.width/2;
Paddle.prototype.cy = g_canvas.height*0.95;

Paddle.prototype.halfWidth = 50;
Paddle.prototype.halfHeight = 10;

Paddle.prototype.speed = 10;

Paddle.prototype.update = function (du) {
    if (g_keys[this.GO_LEFT]) {
        this.cx -= this.speed * du;
    } else if (g_keys[this.GO_RIGHT]) {
        this.cx += this.speed * du;
    }
};

Paddle.prototype.render = function (ctx) {
    // (cx, cy) is the centre; must offset it for drawing
    fillBox(
        ctx,
        this.cx - this.halfWidth,
        this.cy - this.halfHeight,
        this.halfWidth * 2,
        this.halfHeight * 2,
        this.color
    );
};
