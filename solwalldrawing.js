
function setup() {
	createCanvas(windowWidth, windowHeight);
	strokeWeight(2);
	rectMode(CENTER);
}



function draw() {
	//Block 1 - Vertical Lines
	var xPos = 5;
	var yPos = 5;
	while(xPos < (windowWidth * 0.19)) {
		line(xPos,5,xPos,(windowHeight - 5));
		xPos = xPos + 4;
	}
	//Block 2 - Horizontal Lines
	while(yPos < (windowHeight-4)) {
		line((windowWidth * 0.27),yPos,(windowWidth * 0.46),yPos);
		yPos = yPos + 4;
	}
	//Block 3 - Diagonal Lines Left to Right
	var xPos2 = ((windowWidth * 0.54)+4);
	var yPos2 = 5;
	xPos = (windowWidth * 0.54);
	yPos = 9
	while(xPos2 < (windowWidth * 0.73)) {
		line(xPos, yPos, xPos2, yPos2);
		xPos2 = xPos2 + 8;
		yPos = yPos + 8;
	}
	while(yPos < (windowHeight - 9)) {
		line(xPos, yPos, xPos2, yPos2);
		yPos = yPos + 8;
		yPos2 = yPos2 + 8;
	}
	while (xPos < ((windowWidth * 0.73) + 4)) {
		line(xPos, yPos, xPos2, yPos2);
		yPos2 = yPos2 + 8;
		xPos = xPos + 8;
	}
	//Block 4 - Diagonal Lines Right to Left
	xPos2 = (windowWidth - 5);
	yPos2 = 9;
	xPos = (windowWidth - 9);
	yPos = 5
	while(xPos > (windowWidth * 0.81)) {
		line(xPos2, yPos2, xPos, yPos);
		xPos = xPos - 8;
		yPos2 = yPos2 + 8;
	}
	while(yPos2 < (windowHeight - 9)) {
		line(xPos2, yPos2, xPos, yPos);
		yPos = yPos + 8;
		yPos2 = yPos2 + 8;
	}
	while (yPos < (windowHeight - 9)) {
		line(xPos2, yPos2, xPos, yPos);
		yPos = yPos + 8;
		xPos2 = xPos2 - 8;
	}
}

