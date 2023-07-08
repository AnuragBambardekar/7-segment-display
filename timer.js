let nums = [0x7E, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 0x70, 0x7F, 0x7B];
let index = 0;
let startTime;

function setup() {
  createCanvas(1520, 500);
  frameRate(1);
  startTime = millis(); // Store the start time
}

function draw() {
  background(0);
  
  let elapsedTime = millis() - startTime; // Calculate the elapsed time
  
  let hours = floor(elapsedTime / (1000 * 60 * 60));
  let minutes = floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = floor((elapsedTime % (1000 * 60)) / 1000);
  
  displayTime(hours, 0, 50);
  displayTime(minutes, 500, 50);
  displayTime(seconds, 1000, 50);
  
  // Update the index to switch between segments for animation
  index = (index + 1) % nums.length;
  
}

function getColor(val, shift) {
  const mask = 1 << shift;
  return (val & mask) ? color(255, 0, 0, 255) : color(0);
}

function drawSegment(x, y, w, h, val, shift) {
  fill(getColor(val, shift));
  rect(x, y, w, h, 10);
}

function drawColon(x, y) {
  fill(color(255, 0, 0));
  ellipse(x, y+50, 15, 15);
  ellipse(x, y + 100, 15, 15);
  translate(30, 0);
}

function displayTime(val, offsetX, offsetY) {
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

  // Display the tens digit (if greater than zero)
  if (val >= 10) {
    const tens = floor(val / 10);
    segments.forEach(([x, y, w, h, shift]) => {
      push();
      translate(offsetX, offsetY);
      rotate(radians(5)); // Rotate the segments by 45 degrees

      drawSegment(x, y, w, h, nums[tens], shift);
      

      pop();
    });
  }

  // Display the ones digit
  const ones = val % 10;

  segments.forEach(([x, y, w, h, shift]) => {
    push();
    translate(offsetX + 200, offsetY);
    rotate(radians(5)); // Rotate the segments by 45 degrees

    drawSegment(x, y, w, h, nums[ones], shift);

    pop();
  });

  // Toggle the visibility of colon every second
  if (frameCount % 2 !== 0) {
    // Draw an empty colon when it's not visible
    fill(0);
    ellipse(offsetX - 100, offsetY + 80 + 50, 15, 15);
    ellipse(offsetX - 100, offsetY + 80 + 100, 15, 15);
    
  } else {
    drawColon(offsetX - 100, offsetY + 80);
  }

  pop();
}


