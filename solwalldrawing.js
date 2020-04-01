
function setup() {
	createCanvas(1000, 800);
	strokeWeight(2);
	rectMode(CENTER);
}


function draw() {
	//Block 1 - Vertical Lines
	var xPos = 5;
	var yPos = 5;
	while(xPos < 202) {
		line(xPos,5,xPos,795);
		xPos = xPos + 4;
	}
	//Block 2 - Horizontal Lines
	while(yPos < 795) {
		line(250,yPos,450,yPos);
		yPos = yPos + 4;
	}
	//Block 3 - Diagonal Lines Left to Right
	var xPos2 = 504;
	var yPos2 = 6;
	xPos = 500;
	yPos = 10
	while(xPos2 < 700) {
		line(xPos, yPos, xPos2, yPos2);
		xPos2 = xPos2 + 8;
		yPos = yPos + 8;
	}
	while(yPos < 790) {
		line(xPos, yPos, xPos2, yPos2);
		yPos = yPos + 8;
		yPos2 = yPos2 + 8;
	}
	while (xPos < 702) {
		line(xPos, yPos, xPos2, yPos2);
		yPos2 = yPos2 + 8;
		xPos = xPos + 8;
	}
	//Block 4 - Diagonal Lines Right to Left
	xPos2 = 950;
	yPos2 = 9;
	xPos = 946;
	yPos = 5
	while(xPos > 750) {
		line(xPos2, yPos2, xPos, yPos);
		xPos = xPos - 8;
		yPos2 = yPos2 + 8;
	}
	while(yPos2 < 793) {
		line(xPos2, yPos2, xPos, yPos);
		yPos = yPos + 8;
		yPos2 = yPos2 + 8;
	}
	while (yPos < 790) {
		line(xPos2, yPos2, xPos, yPos);
		yPos = yPos + 8;
		xPos2 = xPos2 - 8;
	}
}

