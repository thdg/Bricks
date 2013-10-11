// ==========
// BRICK STUFF
// ==========

// A generic constructor which accepts an arbitrary descriptor object
function Brick(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
    this.setColor(this.lives)
}

// Default proporties
Brick.prototype.dying = false;
Brick.prototype.lives = 1;
Brick.prototype.lastsLives = 1; // lives when last updated

Brick.prototype.halfHeight = 20
Brick.prototype.halfWidth = 50

Brick.prototype.setColor = function(lives) {
    switch (this.lives) {
        case 1:
            this.color = "white";
            break;
        case 2:
            this.color = "red";
            break;
        case 3:
            this.color = "blue";
            break;
        case 4:
            this.color = "green";
            break;
        default:
            this.color = "gray";
            break;
    }
}

Brick.prototype.update = function (du) {
    if (this.lives<=0) {
        this.dying = true;
    } else
    if (this.lives<this.lastsLives) {
        this.setColor(this.lives);
    }
};

Brick.prototype.render = function (ctx) {
    fillBox(
        ctx,
        this.cx - this.halfWidth,
        this.cy - this.halfHeight,
        this.halfWidth * 2,
        this.halfHeight * 2,
        this.color
    );
};