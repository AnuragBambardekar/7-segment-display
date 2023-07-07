let nums = [0x7E, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 0x70, 0x7F, 0x7B];
let index = 0;

function setup() {
  createCanvas(1260, 400); // Increased canvas width to accommodate multiple displays
  frameRate(1);
}

function draw() {
  background(0);
  sevenSegment(nums[index], 0, 50); // Display 1
  sevenSegment(nums[index], 200, 50); // Display 2
  drawColon(400, 180);
  sevenSegment(nums[index], 400, 50); // Display 3
  sevenSegment(nums[index], 600, 50); // Display 4
  drawColon(800, 180);
  sevenSegment(nums[index], 800, 50); // Display 5
  sevenSegment(nums[index], 1000, 50); // Display 6
  index = (index + 1) % nums.length;
}

function getColor(val, shift) {
  const mask = 1 << shift;
  return (val & mask) ? color(0, 255, 0, 255) : color(0);
}

function drawSegment(x, y, w, h, val, shift) {
  fill(getColor(val, shift));
  rect(x, y, w, h, 10);
}

function drawColon(x,y) {
    fill(color(255,0,0))
	ellipse(x, y, 10, 10) // x,y,w,h
	ellipse(x-5, y+50, 10, 10)
	translate(30, 0)
}

function sevenSegment(val, offsetX, offsetY) {
  push();
  stroke(0);
  noFill();

  const segments = [
    [60, 20, 78, 18, 6],    // A
    [140, 40, 18, 98, 5],   // B
    [140, 160, 18, 98, 4],  // C
    [60, 260, 78, 18, 3],   // D
    [40, 160, 18, 98, 2],   // E
    [40, 40, 18, 98, 1],    // F
    [60, 140, 78, 18, 0]    // G
  ];

  segments.forEach(([x, y, w, h, shift]) => {
    drawSegment(x + offsetX, y + offsetY, w, h, val, shift);
  });

  pop();
}
