//type => 0 : 벽돌, 1 : 물, 2 : 빙판, 3 : 바위, 4 : 물고기, 5 : 녹는 빙판, 6 : 이글루

let wallImg;
let waterImg;
let iceImg;
let rockImg;
let fishImg;
let iglooImg;

function MapObject(){}
MapObject.prototype.x = null;
MapObject.prototype.y = null;
MapObject.prototype.img = null;
MapObject.prototype.name = null;
MapObject.prototype.type = null;
MapObject.prototype.init = function(){}
MapObject.prototype.update = function(x, y){}
MapObject.prototype.render = function(){
    ctx.drawImage(this.img, this.x, this.y, PIXEL, PIXEL);
}
MapObject.prototype.getString = function(){
    return this.name;
}
MapObject.prototype.getType = function(){
    return this.type;
}

function Wall(){}
Wall.prototype = new MapObject();
Wall.prototype.init = function(x, y){
    this.x = x;
    this.y = y;
    this.name = "wall";
    this.type = NUM_WALL;
    this.img = wallImg;
}

function Water(){}
Water.prototype = new MapObject();
Water.prototype.init = function(x, y){
    this.x = x;
    this.y = y;
    this.name = "water";
    this.type = NUM_WATER;
    this.img = waterImg;
}

function Ice(){}
Ice.prototype = new MapObject();
Ice.prototype.init = function(x, y){
    this.x = x;
    this.y = y;
    this.name = "ice";
    this.type = NUM_ICE;
    this.img = iceImg;
}
Ice.prototype.update = function(x, y){
    this.x = x;
    this.y = y;
}

function Rock(){}
Rock.prototype = new MapObject();
Rock.prototype.init = function(x, y){
    this.x = x;
    this.y = y;
    this.name = "rock";
    this.type = NUM_ROCK;
    this.img = rockImg;
}

function Fish(){
    this.count;
}
Fish.prototype = new MapObject();
Fish.prototype.init = function(x, y){
    this.x = x;
    this.y = y;
    this.name = "fish";
    this.type = NUM_FISH;
    this.img = fishImg;
    this.count = 0;
}
Fish.prototype.render = function(){
    this.count++;
    if(this.count > 4) this.count = 0;
    ctx.drawImage(this.img, this.x, this.y + this.count, PIXEL, PIXEL);
}

function Igloo(){}
Igloo.prototype = new MapObject();
Igloo.prototype.init = function(x, y){
    this.x = x;
    this.y = y;
    this.name = "igloo";
    this.type = NUM_IGLOO;
    this.img = iglooImg;
}