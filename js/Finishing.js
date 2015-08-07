function Finishing() {
	this.thickNess = 0;
}

function EdgeBinding(thickNess) {
	this.thickNess = thickNess;
}

EdgeBinding.prototype = Finishing.prototype
EdgeBinding.prototype.constructor = EdgeBinding;

function Lamination(thickNess) {
	this.thickNess = thickNess;
}

Lamination.prototype = Finishing.prototype
Lamination.prototype.constructor = Lamination;
