function rectangle (x,y,width,height){
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
	//this.color = colores_google();


}

function colores_google() {
	//tra 10 e 1
	n=Math.floor((Math.random() * 16500000) + 1);
  var colores_g = ["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00", "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707", "#651067", "#329262", "#5574a6", "#3b3eac"];
  //return colores_g[n % colores_g.length];
  return '#'+(Math.random()*0xFFFFFF<<0).toString(16);;
}

rectangle.prototype.getX=function(){
	return this.x;
}
rectangle.prototype.setX=function(x){
	this.x=x;
}
rectangle.prototype.getY=function(){
	return this.y;
}
rectangle.prototype.setY=function(y){
	this.y=y;
}
rectangle.prototype.getWidth=function(){
	return this.width;
}
rectangle.prototype.setWidth=function(width){
	this.width=width;
}
rectangle.prototype.getHeight=function(){
	return this.height;
}
rectangle.prototype.setHeight=function(height){
	this.height=height;
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