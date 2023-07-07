function setup() {
    createCanvas(400,400);
}

function draw() {
    background(220);
    sevenSegment();
}

function sevenSegment() {
    push();
    stroke(0);
    noFill();

    // fill(40);
    // A
    rect(60, 20, 78, 18); // x, y, w, h - top
    
    // B
    rect(140, 40, 18, 98); // u-right

    // C
    rect(140, 160, 18, 98); // b-right

    // D
    rect(60, 260, 78, 18); // bottom

    // E
    rect(40, 160, 18, 98); // b-left
    
    // F
    rect(40, 40, 18, 98); // u-left
    
    // G
    rect(60, 140, 78, 18); // middle

    pop();
}