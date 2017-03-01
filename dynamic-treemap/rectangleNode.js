function rectangle (weight,color,id) {
	/*
	this.leftUp = { "x": this.x, "y": this.y};
	this.leftDown = { "x": this.x, "y": this.y+height};
	this.rightUp = { "x": this.x+this.width, "y": this.y};
	this.rightDown = { "x": this.x+this.width, "y": this.y+height};
	this.rectData = [this.leftUp,this.rightUp,this.rightDown,this.leftDown];
	*/
	this.id = id;

	this.x;
	this.y;
	this.width;
	this.height;

	this.line;

	this.color = color;
	this.weight = weight;
	this.area;
	this.vertical; // il nodo è diviso con linee verticali

	this.parent;
	this.listChild=[];
}

rectangle.prototype.setPath=function(){
	this.line = "M"+this.x+","+this.y+
				" L"+(this.width+this.x)+","+this.y+
				" L"+(this.width+this.x)+","+(this.height+this.y)+
				" L"+this.x+","+(this.height+this.y);
}

rectangle.prototype.setDimensions=function(newWidth,newHeight,newX){
	this.line = "M"+newX+","+newHeight+
				" L"+(newX+newWidth)+","+newHeight+
				" L"+(newX+newWidth)+","+(this.height+this.y)+
				" L"+newX+","+(this.height+this.y);
}

rectangle.prototype.setDimensionsUp=function(newWidth,newHeight,newX){
	this.line = "M"+newX+","+this.y+
				" L"+(newX+newWidth)+","+this.y+
				" L"+(newX+newWidth)+","+(this.y+newHeight)+
				" L"+newX+","+(this.y+newHeight);
}

rectangle.prototype.setFirstTriangleUp=function(xQuantity){
	this.line = "M"+this.x+","+this.y+
				" L"+(this.x)+","+this.y+
				" L"+(xQuantity+this.x)+","+(this.height+this.y)+
				" L"+this.x+","+(this.height+this.y);
}
rectangle.prototype.setFirstPointBackUp=function(xQuantity){
	this.line = "M"+this.x+","+this.y+
				" L"+(xQuantity+this.x)+","+(this.height+this.y)+
				" L"+(xQuantity+this.x)+","+(this.height+this.y)+
				" L"+this.x+","+(this.height+this.y);
}
rectangle.prototype.setSecondTriangleUp=function(xQuantity,yQuantity){
	this.line = "M"+this.x+","+(this.y+this.height-yQuantity)+
				" L"+(xQuantity+this.x)+","+(this.y+this.height)+
				" L"+(xQuantity+this.x)+","+(this.y+this.height)+
				" L"+this.x+","+(this.height+this.y);

}

rectangle.prototype.setThirdTriangleUp=function(xQuantity,yQuantity){
	this.line = "M"+this.x+","+(this.height+this.y)+
				" L"+(xQuantity+this.x)+","+(this.y+this.height-yQuantity)+
				" L"+(xQuantity+this.x)+","+(this.y+this.height)+
				" L"+this.x+","+(this.height+this.y);
}
rectangle.prototype.setSecondPointBackUp=function(xQuantity,yQuantity){
	this.line = "M"+(xQuantity+this.x)+","+(this.y+this.height-yQuantity)+
				" L"+(xQuantity+this.x)+","+(this.y+this.height-yQuantity)+
				" L"+(xQuantity+this.x)+","+(this.y+this.height)+
				" L"+this.x+","+(this.height+this.y);
}
rectangle.prototype.setFourthTriangleUp=function(xbase,xQuantity){
	this.line = "M"+(xQuantity+this.x)+","+(this.y)+
				" L"+(xQuantity+this.x)+","+(this.y)+
				" L"+(xQuantity+this.x)+","+(this.y+this.height)+
				" L"+(+this.x+xbase)+","+(this.height+this.y);
}


rectangle.prototype.setFirstInverseTriangleUp=function(xQuantity){
	this.line = "M"+(this.x+this.width+xQuantity)+","+this.y+
				" L"+(this.x+this.width)+","+this.y+
				" L"+(this.x+this.width)+","+(this.y+this.height)+
				" L"+(this.x+this.width)+","+(this.y+this.height);
}
rectangle.prototype.setFirstInversePointBackUp=function(xQuantity){
	this.line = "M"+(this.x+this.width+xQuantity)+","+this.y+
				" L"+(this.x+this.width)+","+this.y+
				" L"+(this.x+this.width)+","+(this.y+this.height)+
				" L"+(this.x+this.width+xQuantity)+","+this.y;
}
rectangle.prototype.setSecondInverseTriangleUp=function(xQuantity,yQuantity){
	this.line = "M"+(this.x+this.width-xQuantity)+","+(this.y)+
				" L"+(this.x+this.width)+","+(this.y)+//abbasso il 2
				" L"+(this.x+this.width)+","+(this.y+yQuantity)+
				" L"+(this.x+this.width-xQuantity)+","+(this.y);
}
rectangle.prototype.setThirdInverseTriangleUp=function(xQuantity,yQuantity){
	this.line = "M"+(this.x+this.width-xQuantity)+","+(this.y)+
				" L"+(this.x+this.width)+","+(this.y)+//abbasso il 2
				" L"+(this.x+this.width)+","+(this.y)+
				" L"+(this.x+this.width-xQuantity)+","+(this.y+this.height-yQuantity);
}
rectangle.prototype.setSecondInversePointBackUp=function(xQuantity,yQuantity){
	this.line = "M"+(this.x+this.width-xQuantity)+","+(this.y)+
				" L"+(this.x+this.width)+","+(this.y)+
				" L"+(this.x+this.width-xQuantity)+","+(this.y+this.height-yQuantity)+
				" L"+(this.x+this.width-xQuantity)+","+(this.y+this.height-yQuantity);
}
rectangle.prototype.setFourthInverseTriangleUp=function(totW,xQ,yQuantity){
	this.line = "M"+(this.x+this.width-totW)+","+(this.y)+
				" L"+(this.x+this.width-totW+xQ)+","+(this.y)+
				" L"+(this.x+this.width-totW)+","+(this.height+this.y)+
				" L"+(this.x+this.width-totW)+","+(this.height+this.y);
}


rectangle.prototype.setFirstTriangle=function(xQuantity){
	this.line = "M"+this.x+","+this.y+
				" L"+(xQuantity+this.x)+","+this.y+
				" L"+(this.x)+","+(this.height+this.y)+
				" L"+this.x+","+(this.height+this.y);
}

rectangle.prototype.setFirstPointBack=function(xQuantity){
	this.line = "M"+this.x+","+this.y+
				" L"+(xQuantity+this.x)+","+this.y+
				" L"+(xQuantity+this.x)+","+this.y+
				" L"+this.x+","+(this.height+this.y);
}

rectangle.prototype.setSecondTriangle=function(xQuantity,yQuantity){
	this.line = "M"+this.x+","+this.y+
				" L"+(xQuantity+this.x)+","+this.y+
				" L"+(xQuantity+this.x)+","+(this.y)+
				" L"+this.x+","+(yQuantity+this.y);
}

rectangle.prototype.setTopRectangle=function(xQuantity,yQuantity){
	this.line = "M"+this.x+","+this.y+
				" L"+(xQuantity+this.x)+","+this.y+
				" L"+(xQuantity+this.x)+","+(yQuantity+this.y)+
				" L"+this.x+","+(yQuantity+this.y);
}

rectangle.prototype.setThirdTriangle=function(xQuantity,yQuantity){
	this.line = "M"+this.x+","+this.y+
				" L"+(xQuantity+this.x)+","+this.y+
				" L"+(xQuantity+this.x)+","+(yQuantity+this.y)+
				" L"+this.x+","+(this.y);
}

rectangle.prototype.setSecondPointBack=function(xQuantity,yQuantity){
	this.line = "M"+this.x+","+this.y+
				" L"+(xQuantity+this.x)+","+this.y+
				" L"+(xQuantity+this.x)+","+(yQuantity+this.y)+
				" L"+(xQuantity+this.x)+","+(yQuantity+this.y);
}

rectangle.prototype.setFourthTriangle=function(xQuantity,totalWidth){
	this.line = "M"+(xQuantity+this.x)+","+this.y+
				" L"+(totalWidth+this.x)+","+this.y+
				" L"+(totalWidth+this.x)+","+(this.height+this.y)+
				" L"+(totalWidth+this.x)+","+(this.height+this.y);
}

rectangle.prototype.lastRectangle=function(xQuantity){
	this.x = xQuantity+this.x;
	this.line = "M"+(this.x)+","+this.y+
				" L"+(this.width+this.x)+","+this.y+
				" L"+(this.width+this.x)+","+(this.height+this.y)+
				" L"+(this.x)+","+(this.height+this.y);
}

/*rectangle.prototype.setSecondRectWidth=function(totalWidth){
	this.line = "M"+this.x+","+this.y+
				" L"+(totalWidth+this.x)+","+this.y+
				" L"+(totalWidth+this.x)+","+(this.height+this.y)+
				" L"+this.x+","+(this.height+this.y);
}*/

rectangle.prototype.expandSecondRectangle=function(offsetWidth){
	this.line = "M"+(this.x-offsetWidth)+","+this.y+
				" L"+(this.x+this.width)+","+this.y+
				" L"+(this.x+this.width)+","+(this.height+this.y)+
				" L"+(this.x-offsetWidth)+","+(this.height+this.y);
}

rectangle.prototype.expandFirstRectangle=function(offsetWidth){
	this.line = "M"+(this.x)+","+this.y+
				" L"+(this.x+offsetWidth)+","+this.y+
				" L"+(this.x+offsetWidth)+","+(this.height+this.y)+
				" L"+(this.x)+","+(this.height+this.y);
}

rectangle.prototype.setFirstInverseTriangle=function(xQuantity){
	this.line = "M"+(this.x+this.width)+","+this.y+
				" L"+(this.x+this.width)+","+this.y+
				" L"+(this.x+this.width)+","+(this.height+this.y)+
				" L"+(this.x+this.width+xQuantity)+","+(this.height+this.y);
}
rectangle.prototype.setFirstInversePointBack=function(xQuantity){
	this.line = "M"+(this.x+this.width+xQuantity)+","+(this.height+this.y)+
				" L"+(this.x+this.width)+","+(this.y)+
				" L"+(this.x+this.width)+","+(this.height+this.y)+
				" L"+(this.x+this.width+xQuantity)+","+(this.height+this.y);
}
rectangle.prototype.setSecondInverseTriangle=function(xQuantity,yQuantity){
	this.line = "M"+(this.x+this.width-xQuantity)+","+(this.height+this.y)+
				" L"+(this.x+this.width)+","+(this.y+yQuantity)+//abbasso il 2
				" L"+(this.x+this.width)+","+(this.height+this.y)+
				" L"+(this.x+this.width-xQuantity)+","+(this.height+this.y);
}
rectangle.prototype.setSecondInverseRectangle=function(xQuantity,yQuantity){
	this.line = "M"+(this.x+this.width-xQuantity)+","+(this.y+yQuantity)+
				" L"+(this.x+this.width)+","+(this.y+yQuantity)+
				" L"+(this.x+this.width)+","+(this.height+this.y)+
				" L"+(this.x+this.width-xQuantity)+","+(this.height+this.y);
}
rectangle.prototype.setThirdInverseTriangle=function(xQuantity,yQuantity){
	this.line = "M"+(this.x+this.width-xQuantity)+","+(this.y+yQuantity)+
				" L"+(this.x+this.width)+","+(this.y+this.height)+
				" L"+(this.x+this.width)+","+(this.y+this.height)+
				" L"+(this.x+this.width-xQuantity)+","+(this.height+this.y);
}
rectangle.prototype.setSecondInversePointBack=function(xQuantity,yQuantity){
	this.line = "M"+(this.x+this.width-xQuantity)+","+(this.y+yQuantity)+
				" L"+(this.x+this.width-xQuantity)+","+(this.y+yQuantity)+
				" L"+(this.x+this.width)+","+(this.y+this.height)+
				" L"+(this.x+this.width-xQuantity)+","+(this.height+this.y);
}
rectangle.prototype.setFourthInverseTriangle=function(totW,xQ,yQuantity){
	this.line = "M"+(this.x+this.width-totW)+","+(this.y)+
				" L"+(this.x+this.width-totW)+","+(this.y)+
				" L"+(this.x+this.width-totW+xQ)+","+(this.y+this.height)+
				" L"+(this.x+this.width-totW)+","+(this.height+this.y);
}
