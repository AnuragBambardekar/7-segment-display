function setup() {
    createCanvas(1520,400);
    fill(0, 255, 0)
	stroke(0)
}

function draw() {
    background(0, 35, 25, 25);
    push();
    scale(2);
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let date = today.getDate();
    let month = today.getMonth() + 1; // Month is zero-indexed, so add 1
    let year = today.getFullYear();

    // Time display
    if (h < 10) {
        translate(55, 0);
    } else {
        drawDigit(h / 10);
    }
    drawDigit(h % 10);
    drawColon();
    drawDigit(m / 10);
    drawDigit(m % 10);
    drawColon();
    drawDigit(s / 10);
    drawDigit(s % 10);

    // Date display
    translate(-105, 100); // Move to the bottom of the clock
    drawDigit(month / 10);
    drawDigit(month % 10);
    drawColon();
    drawDigit(date / 10);
    drawDigit(date % 10);
    drawColon();
    drawDigit(year / 1000);
    drawDigit((year % 1000) / 100);
    drawDigit((year % 100) / 10);
    drawDigit(year % 10);

    pop();
}

function drawColon() {
	ellipse(20, 35, 10, 10)
	ellipse(15, 70, 10, 10)
	translate(20, 0)
}

function drawDigit(n) {
	n = Math.floor(n)
	const nums = [0x3f, 0x06, 0x5b, 0x4f, 0x66, 0x6d, 0x7d, 0x07, 0x7f, 0x6f]
	let hex = nums[n]
	let i = 0
	while (hex != 0) {
		if (hex & 1) {
			addSegment(i)
		}
		i++;
		hex = hex >> 1
	}
	translate(55, 0)
}

function addSegment(index) {
    const a = HALF_PI * 1.1
	const startX = [20, 55, 50, 10, 15, 20, 15];
	const startY = [20, 20, 55, 90, 55, 20, 55];
	const rot = [0, a, a, 0, a, a, 0]
	push();
	translate(startX[index], startY[index])
	rotate(rot[index])
    // scale(2)
	// draw the segment...
	beginShape()
	vertex(0, 0)
	vertex(5, -5)
	vertex(30, -5)
	vertex(35, 0)
	vertex(30, 5)
	vertex(5, 5)
	endShape(CLOSE)
	pop();
}