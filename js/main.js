var canvasWidth = 600;
var canvasHeight = 400;

var egg = {
	x: 285,
	y: 20,
	yVel: 0,
	width: 30,
	color: "#fff",
	draw: function() {
		fill(this.color);
		ellipse(this.x, this.y, this.width);
	},
	update: function() {
		this.y += this.yVel;
		if (this.y + this.width >= canvasHeight) {
			this.y = 20;
			this.yVel = 0;
		}
	}
};

var bucket = {
	x: 20,
	y: 350,
	xVel: 5,
	direction: 0,
	width: 80,
	height: 40,
	color: "#fff",
	draw: function() {
		fill(this.color);
		rect(this.x, this.y, this.width, this.height);
	},
	update: function() {
		this.x += this.xVel;
		if (this.x + this.width > canvasWidth) {
			this.xVel = -5;
		} else if (this.x < 0) {
			this.xVel = 5;
		}
	}
}

function setup() {
	createCanvas(canvasWidth, canvasHeight);
	background(45);
}

function collision(a, b) {
	return a.y + a.width > b.y && a.y < b.y + b.height && a.x + a.width > b.x && a.x < b.x + b.width;
}
function draw() {
	clear();
	background(45);
	egg.draw();
	egg.update();
	bucket.draw();
	bucket.update();
	if (keyIsDown(32)) {
		egg.yVel = 5;
	}
	if (collision(egg, bucket)) {
		console.log("success!");
		egg.y = 20;
		egg.yVel = 0;
	}
}