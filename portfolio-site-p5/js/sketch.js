let canvas;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", -2);
    background(225)
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw(){
    background(220);
    for (let i = 0; i < 6; ++i){
      strokeWeight(0);
      fill(255 - i * 40, i * 40, 150 + i * 20);
      ellipse(width / 2, height / 2, 300-(i*50), 300-(i*50));
    }
}

function mouseMoved(){
    drawThing(mouseX, mouseY);
}

function drawThing(_x, _y){
    strokeWeight(0)
    fill(random(200, 255), random(200, 255), random(200, 255));
    ellipse(_x, _y, 30, 30)
}