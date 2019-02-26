//type => 0 : 벽돌, 1 : 물, 2 : 빙판, 3 : 바위, 4 : 물고기, 5 : 녹는 빙판, 6 : 이글루

let wallImg;
let waterImg;
let iceImg;
let rockImg;
let fishImg;
let iglooImg;

function MapObject(){}
MapObject.prototype.img = null;
MapObject.prototype.name = null;
MapObject.prototype.type = null;
MapObject.prototype.init = function(){}
MapObject.prototype.render = function(x, y){
    ctx.drawImage(this.img, x, y, 40, 40);
}
MapObject.prototype.getString = function(){
    return this.name;
}
MapObject.prototype.getType = function(){
    return this.type;
}

function Wall(){}
Wall.prototype = new MapObject();
Wall.prototype.img = null;
Wall.prototype.name = null;
Wall.prototype.type = null;
Wall.prototype.init = function(){
    this.name = "wall";
    this.type = NUM_WALL;
    this.img = wallImg;
}

function Water(){}
Water.prototype = new MapObject();
Water.prototype.img = null;
Water.prototype.name = null;
Water.prototype.type = null;
Water.prototype.init = function(){
    this.name = "water";
    this.type = NUM_WATER;
    this.img = waterImg;
}

function Ice(){}
Ice.prototype = new MapObject();
Ice.prototype.img = null;
Ice.prototype.name = null;
Ice.prototype.type = null;
Ice.prototype.init = function(){
    this.name = "ice";
    this.type = NUM_ICE;
    this.img = iceImg;
}

function Rock(){}
Rock.prototype = new MapObject();
Rock.prototype.img = null;
Rock.prototype.name = null;
Rock.prototype.type = null;
Rock.prototype.init = function(){
    this.name = "rock";
    this.type = NUM_ROCK;
    this.img = rockImg;
}

function Fish(){
    this.count;
}
Fish.prototype = new MapObject();
Fish.prototype.img = null;
Fish.prototype.name = null;
Fish.prototype.type = null;
Fish.prototype.init = function(){
    this.name = "fish";
    this.type = NUM_FISH;
    this.img = fishImg;
    this.count = 0;
}
Fish.prototype.render = function(x, y){
    this.count++;
    if(this.count > 4) this.count = 0;
    ctx.drawImage(this.img, x, y + this.count, 40, 40);
}

function Igloo(){}
Igloo.prototype = new MapObject();
Igloo.prototype.img = null;
Igloo.prototype.name = null;
Igloo.prototype.type = null;
Igloo.prototype.init = function(){
    this.name = "igloo";
    this.type = NUM_IGLOO;
    this.img = iglooImg;
}