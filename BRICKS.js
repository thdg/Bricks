"use strict";


/*
0        1         2         3         4         5         6         7         8         9
123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
*/

// ============
// ENTITIES
// ============

var g_player = new Player({
    score: 0,
    lives: 0
});

var KEY_A = 'A'.charCodeAt(0);
var KEY_D = 'D'.charCodeAt(0);

var g_paddle = new Paddle({
    GO_LEFT  : KEY_A,
    GO_RIGHT : KEY_D,
    
    color : "white"
});

var g_balls = [new Ball()];
var g_bricks = getBricks(0);

function getBricks(lvl) {
    return [new Brick({cx: 100, cy: 100})];
}
// =============
// GATHER INPUTS
// =============

function gatherInputs() {
    // Nothing to do here!
    // The event handlers do everything we need for now.
}

// =================
// UPDATE SIMULATION
// =================

// We take a very layered approach here...
//
// The primary `update` routine handles generic stuff such as
// pausing, single-step, and time-handling.
//
// It then delegates the game-specific logic to `updateSimulation`


// GAME-SPECIFIC UPDATE LOGIC

function updateSimulation(du) {
    g_paddle.update(du);
    updateArray(g_balls,du);
    updateArray(g_bricks,du);
}

function updateArray(array, du) {
    var i = 0;
    while (array[i]) {
        if (!array[i].dying) {
            array[i++].update(du);
        } else {
            array.splice(i,1); // kill it
        }
    }
}
    


// =================
// RENDER SIMULATION
// =================

// We take a very layered approach here...
//
// The primary `render` routine handles generic stuff such as
// the diagnostic toggles (including screen-clearing).
//
// It then delegates the game-specific logic to `gameRender`


// GAME-SPECIFIC RENDERING

function renderSimulation(ctx) {
    g_paddle.render(ctx);
    renderArray(g_balls,ctx);
    renderArray(g_bricks,ctx);
}

function renderArray(array, ctx) {
    var i = 0;
    while (array[i]) {
        array[i++].render(ctx);
    }
}

// Kick it off
g_main.init();