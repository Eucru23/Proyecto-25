class Paper {
	constructor(x, y, radius) {
	  var options = {
		'density':1.2,
		'friction': 0,
		'restitution':0.3,
		isStatic: false
	  };
	  this.body = Bodies.circle(x,y,radius,options);
	  this.image = loadImage("paper.png");
	  World.add(world, this.body);
	  this.body.radius = radius;

	};
	display(){ 
	  var pos = this.body.position;
		var radius = this.body.radius;
	  push();
	  strokeWeight(3);
	  stroke(230)
	  fill(230)
	  ellipseMode(RADIUS);
  	  ellipse(pos.x, pos.y, radius,radius);
	  imageMode(CENTER);
	  image(this.image, pos.x, pos.y, radius + radius + radius, radius + radius + radius);
	  pop();
	};
  };