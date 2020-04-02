function setup() {
	createCanvas(windowWidth, windowHeight);
	background(50);
	rectMode(CENTER);
	stroke(2);
}

var ww=0;
var wh=0;
var xw=0;
var yh=0;

function draw() {
	ww=windowWidth;
	wh=windowHeight;
	xw=windowWidth/20;
	yh=windowHeight/20;
	
	
	for(let x=xw/2; x<ww; x+=xw){
		for(let y=yh/2; y<wh; y+=yh){
			fill(random(255),random(255),random(255));
			rect(x,y,(xw*0.9),(yh*0.9));
		}
	}
}
