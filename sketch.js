let nums = [0x7E, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 0x70, 0x7F, 0x7B];
let index = 0;

function setup() {
    createCanvas(400,400);
    frameRate(1);
}

function draw() {
    background(0);
    sevenSegment(nums[index]);
    index = (index+1) % nums.length;
}


function getColor(val, shift) {
    let r = 0;
    let g = 255;
    let b = 0;
    let a = 255 * ((val >> shift) & 1);
    return color(r,g,b,a);
}

function sevenSegment(val) {
    push();
    stroke(0);
    // colorMode(RGB, 1)
    noFill();

    // fill(40);
    // A
    fill(getColor(val, 6));
    rect(60, 20, 78, 18, 10, 10, 10, 10); // x, y, w, h - top
    
    // B
    fill(getColor(val, 5));
    rect(140, 40, 18, 98, 10, 10, 10, 10); // u-right

    // C
    fill(getColor(val, 4));
    rect(140, 160, 18, 98, 10, 10, 10, 10); // b-right

    // D
    fill(getColor(val, 3));
    rect(60, 260, 78, 18, 10, 10, 10, 10); // bottom

    // E
    fill(getColor(val, 2));
    rect(40, 160, 18, 98, 10, 10, 10, 10); // b-left
    
    // F
    fill(getColor(val, 1));
    rect(40, 40, 18, 98, 10, 10, 10, 10); // u-left
    
    // G
    fill(getColor(val, 0));
    rect(60, 140, 78, 18, 10, 10, 10, 10); // middle

    pop();
}