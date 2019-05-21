/*eslint-env browser*/
/*eslint no-console:0*/
/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)

*/

var puck = document.getElementById('puck');
var puck_x = 210;
var puck_y = 210;
var speed = 50;

puck.style.left = puck_x + 'px';
puck.style.top = puck_y + 'px';

function logCoordinates() {
    console.log('x=' + puck_x + ' y=' + puck_y);
}

function checkCollision() {
    //has the puck passed the left edge of the hole
    if (puck_x > 250 && puck_x < 350 && puck_y > 150 && puck_y < 250) {
        console.log('ohhhhhhh dearie me this is a pickle');
        document.getElementById('gap').style.backgroundColor = 'red';
    }
    else {
        document.getElementById('gap').style.backgroundColor = 'white';
    }
}

function checkEdge() {
    if (puck_x < 0) {
        puck_x = 590;
        puck.style.left = puck_x + 'px';
    }
    else if (puck_x > 600) {
        puck_x = 10;
        puck.style.left = puck_x + 'px';
    }
    else if (puck_y < 0) {
        puck_y = 390;
        puck.style.top = puck_y + 'px';
    }
    else if (puck_y > 400) {
        puck_y = 10;
        puck.style.top = puck_y + 'px';
    }
} 

document.getElementById('left').addEventListener('click', function(){
    puck_x -= speed;
    puck.style.left = puck_x + 'px';
    logCoordinates();
    checkCollision();
    checkEdge()
});

document.getElementById('right').addEventListener('click', function(){
    puck_x += speed;
    puck.style.left = puck_x + 'px';
    logCoordinates();
    checkCollision();
    checkEdge()
});

document.getElementById('up').addEventListener('click', function(){
    puck_y -= speed;
    puck.style.top = puck_y + 'px';
    logCoordinates();
    checkCollision();
    checkEdge()
});

document.getElementById('down').addEventListener('click', function(){
    puck_y += speed;
    puck.style.top = puck_y + 'px';
    logCoordinates();
    checkCollision();
    checkEdge()
});