function Plank(width, depth, thickNess) {
	this.length = length;
	this.width = width;
	this.thickNess = thickNess;
	var vertices = new Array(3);

	for(var i = 0; i< vertices.length; i++) {
		vertices [i] = new Array(8);
	}
	
	vertices[0][0] = 0;
	vertices[1][0] = 0;
	vertices[2][0] = 0;
	
	vertices[0][1] = width;
	vertices[1][1] = 0;
	vertices[2][1] = 0;
	
	vertices[0][2] = width;
	vertices[1][2] = 0;
	vertices[2][2] = depth;
	
	vertices[0][3] = 0;
	vertices[1][3] = 0;
	vertices[2][3] = depth;

	vertices[0][4] = 0;
	vertices[1][4] = thickNess;
	vertices[2][4] = 0;
	
	vertices[0][5] = width;
	vertices[1][5] = thickNess;
	vertices[2][5] = 0;
	
	vertices[0][6] = width;
	vertices[1][6] = thickNess;
	vertices[2][6] = depth;
	
	vertices[0][7] = 0;
	vertices[1][7] = thickNess;
	vertices[2][7] = depth;
	
	this.vertices = vertices
	
	this.faces = [];
	
	for (var i = 0; i < 6; i++ ){
		this.faces.push(new Face("LAMINATION"));
	}
};

Plank.prototype.translate= function() {
}

Plank.prototype.rotateAroundXAxis= function(angle) {
}

Plank.prototype.rotateAroundYAxis= function(angle) {
}

Plank.prototype.rotateAroundZAxis= function(angle) {
}

Plank.prototype.rotate= function(angle) {
}

