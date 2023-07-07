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
    rect(60, 20, 80, 20); // x, y, w, h - top
    triangle(60,20,60,40,40,30) // 3 coordinates
    triangle(140,20,140,40,155,30) // 3 coordinates
    
    // B
    rect(145, 45, 20, 65); // u-right
    triangle(145,45,165,35,165,45) // 3 coordinates
    // triangle(140,20,140,40,160,30) // 3 coordinates

    // C
    rect(140, 160, 20, 80); // b-right
    // triangle(140,20,140,40,160,30) // 3 coordinates

    // D
    rect(60, 260, 80, 20); // bottom

    // E
    rect(40, 160, 20, 100); // b-left
    
    // F
    rect(40, 40, 20, 100); // u-left
    
    // G
    rect(60, 140, 80, 20); // middle

    pop();
}