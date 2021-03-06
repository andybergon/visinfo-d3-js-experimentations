function rectangle (x,y,width,height,color){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.area = this.width*this.height;
	this.leftUp = { "x": this.x, "y": this.y};
	this.leftDown = { "x": this.x, "y": this.y+height};
	this.rightUp = { "x": this.x+this.width, "y": this.y};
	this.rightDown = { "x": this.x+this.width, "y": this.y+height};
	this.rectData = [this.leftUp,this.rightUp,this.rightDown,this.leftDown];
	
	this.line = "M"+this.x+","+this.y+
				" L"+(this.width+this.x)+","+this.y+
				" L"+(this.width+this.x)+","+(this.height+this.y)+
				" L"+this.x+","+(this.height+this.y);
	this.color = color;
	this.listChild=[];
	this.weight;

}

rectangle.prototype.setLine=function(){
	this.line = "M"+this.x+","+this.y+
				" L"+(this.width+this.x)+","+this.y+
				" L"+(this.width+this.x)+","+(this.height+this.y)+
				" L"+this.x+","+(this.height+this.y);
}

function colores_google() {
	//tra 10 e 1
	n=Math.floor((Math.random() * 16500000) + 1);
  var colores_g = ["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00", "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707", "#651067", "#329262", "#5574a6", "#3b3eac"];
  //return colores_g[n % colores_g.length];
  return '#'+(Math.random()*0xFFFFFF<<0).toString(16);;
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







rectangle.prototype.getX=function(){
	return this.x;
}
rectangle.prototype.setX=function(x){
	this.x=x;
	this.line = "M"+this.x+","+this.y+
				" L"+(this.width+this.x)+","+this.y+
				" L"+(this.width+this.x)+","+(this.height+this.y)+
				" L"+this.x+","+(this.height+this.y);
}
rectangle.prototype.getY=function(){
	return this.y;
}
rectangle.prototype.setY=function(y){
	this.y=y;
	this.line = "M"+this.x+","+this.y+
				" L"+(this.width+this.x)+","+this.y+
				" L"+(this.width+this.x)+","+(this.height+this.y)+
				" L"+this.x+","+(this.height+this.y);
}
rectangle.prototype.getWidth=function(){
	return this.width;
}
rectangle.prototype.setWidth=function(width){
	this.width=width;
	this.line = "M"+this.x+","+this.y+
				" L"+(this.width+this.x)+","+this.y+
				" L"+(this.width+this.x)+","+(this.height+this.y)+
				" L"+this.x+","+(this.height+this.y);
}
rectangle.prototype.getHeight=function(){
	return this.height;
}
rectangle.prototype.setHeight=function(height){
	this.height=height;
	this.line = "M"+this.x+","+this.y+
				" L"+(this.width+this.x)+","+this.y+
				" L"+(this.width+this.x)+","+(this.height+this.y)+
				" L"+this.x+","+(this.height+this.y);
}
rectangle.prototype.getLeftUp=function(){
	return this.leftUp;
}
rectangle.prototype.setLeftUp=function(leftUp){
	this.leftUp=leftUp;
}
rectangle.prototype.getLeftDown=function(){
	return this.leftDown;
}
rectangle.prototype.setLeftDown=function(leftDown){
	this.leftDown=leftDown;
}
rectangle.prototype.getRightUp=function(){
	return this.rightUp;
}
rectangle.prototype.setRightUp=function(rightUp){
	this.rightUp=rightUp;
}
rectangle.prototype.getRightDown=function(){
	return this.rightDown;
}
rectangle.prototype.setX=function(rightDown){
	this.rightDown=rightDown;
}

rectangle.prototype.toString=function(){
	return "x:"+this.x+" y:"+this.y+" widht:"+this.width+" height:"+this.height+" area:"+this.area+
	" \nleftUp = x:"+this.leftUp.x+" y:"+this.leftUp.y+
	" \nleftDown = x:"+this.leftDown.x+" y:"+this.leftDown.y+
	" \nrightUp = x:"+this.rightUp.x+" y:"+this.rightUp.y+
	" \nrightDown = x:"+this.rightDown.x+" y:"+this.rightDown.y
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