var cwidth = 600;
var cheight = 400;
var egg = {
	x: 285,
	y: 20,
	color: "#FFF",
	width: 30,
	yvelocity: 5,
	falling : 0,
	draw: function(){
		ellipse(this.x, this.y, this.width);
	},
	update: function(){
		if(egg.y >= (cheight-this.width) ){
			this.falling = 0;
			this.y = 20;
		}
		if(egg.falling == 1){
			this.y += this.yvelocity;
		}
	}

}

var bucket = {
	color: "#FFF",
	x: 0,
	y: 350,
	direction: 0,
	height: 40,
	width: 70,
	xvelocity: 5,
	draw: function(){
		rect(this.x, this.y, this.width, this.height);
	},
	update: function(){
		if(this.x >= (cwidth - this.width) && this.direction == 0 ){
			this.direction = 1;
		} 
		else if(this.x <= 0 && this.direction == 1){
			this.direction = 0;
		}
		if(this.direction == 0){
			this.x += this.xvelocity;
		}
		else{
			this.x -= this.xvelocity;
		}
	}
}
function check_collision(a, b){
	return a.x + a.width >= b.x && a.x < b.x + b.width && a.y + a.width >= b.y && a.y < b.y + b.height;
}

function setup(){
	createCanvas(cwidth, cheight);
	// background(45);
}

function draw(){
	clear();
	background(45);
	fill(egg.color);
	egg.draw();
	bucket.draw();

	if(keyIsDown(32) && egg.falling == 0){
		egg.falling = 1;
	}

	egg.update();
	bucket.update();	

	if(check_collision(egg, bucket)){
		console.log("success");
		egg.falling = 0;
		egg.y = 20;
	}
}