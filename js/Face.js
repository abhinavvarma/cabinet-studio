function Face(finishType) {
	
	this.finishing = null;
	if(finishType){
		if( finishType == "EDGEBINDING" ) {
			this.finishing = new EdgeBinding(0);
		}else if (finishType == "LAMINATION" ) {
			this.finishing = new Lamination(0);
		}
	}
	
}
