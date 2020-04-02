
function setup() {
	createCanvas(windowWidth, windowHeight);
	strokeWeight(1);
	rectMode(CENTER);
}

	var xPos = 5;
	var yPos = 5;
	var xPos2 = 5;
	var yPos2 = 5;
	var ww = 0;
	var wh = 0;


function draw() {
		ww = windowWidth;
		wh = windowHeight;
	//Block 1 - Vertical Lines

	for(i=xPos; i < (ww * 0.19); i += 4) {
		line(i,5,i,(wh - 5));
	}
	//Block 2 - Horizontal Lines
	for(let i=yPos; i < (wh-4); i += 4) {
		line((ww * 0.27),i,(ww * 0.46),i);
	}
	
	//Block 3 - Diagonal Lines Left to Right
	xPos2 = ((ww * 0.54)+4);
	yPos2 = 5;
	xPos = (ww * 0.54);
	yPos = 9
	
	while(xPos2 < (ww * 0.73)) {
		line(xPos, yPos, xPos2, yPos2);
		xPos2 += 8;
		yPos += 8;
	}
	while(yPos < (wh - 9)) {
		line(xPos, yPos, xPos2, yPos2);
		yPos += 8;
		yPos2 += 8;
	}
	while (xPos < ((ww * 0.73) + 4)) {
		line(xPos, yPos, xPos2, yPos2);
		yPos2 += 8;
		xPos += 8;
	}
	
	//Block 4 - Diagonal Lines Right to Left
	xPos2 = (ww - 5);
	yPos2 = 9;
	xPos = (ww - 9);
	yPos = 5
	while(xPos > (ww * 0.81)) {
		line(xPos2, yPos2, xPos, yPos);
		xPos -= 8;
		yPos2 += 8;
	}
	while(yPos2 < (wh - 9)) {
		line(xPos2, yPos2, xPos, yPos);
		yPos += 8;
		yPos2 += 8;
	}
	while (yPos < (wh - 8)) {
		line(xPos2, yPos2, xPos, yPos);
		yPos += 8;
		xPos2 -= 8;
	}
}
