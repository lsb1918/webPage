//type => -1 : 벽돌, 0 : 물, 1 : 빙판, 2 : 바위, 3 : 물고기, 4 : 녹는 빙판, 5 : 이글루
function MapObject(){}
MapObject.prototype.img = null;
MapObject.prototype.name = null;
MapObject.prototype.type = null;
MapObject.prototype.init = function(){}
MapObject.prototype.render = function(x, y){
    ctx.drawImage(this.img, x, y);
}
MapObject.prototype.getString = function(){
    return this.name;
}
MapObject.prototype.getType = function(){
    return this.type;
}

function Wall(){}
Wall.prototype.img = null;
Wall.prototype.name = null;
Wall.prototype.type = null;
Wall.prototype.init = function(){
    this.name = "wall";
    this.type = -1;
    Util.imgLoad(this.img = new Image(), "resource/object/wall.png");
}

function Water(){}
Water.prototype.img = null;
Water.prototype.name = null;
Water.prototype.type = null;
Water.prototype.init = function(){
    this.name = "water";
    this.type = 0;
    Util.imgLoad(this.img = new Image(), "resource/object/map.png");
}

function Ice(){}
Ice.prototype.img = null;
Ice.prototype.name = null;
Ice.prototype.type = null;
Ice.prototype.init = function(){
    this.name = "ice";
    this.type = 1;
    Util.imgLoad(this.img = new Image(), "resource/object/ice.png");
}

function Rock(){}
Rock.prototype.img = null;
Rock.prototype.name = null;
Rock.prototype.type = null;
Rock.prototype.init = function(){
    this.name = "rock";
    this.type = 2;
    Util.imgLoad(this.img = new Image(), "resource/object/rock.png");
}

function Fish(){}
Fish.prototype.img = null;
Fish.prototype.name = null;
Fish.prototype.type = null;
Fish.prototype.init = function(){
    this.name = "fish";
    this.type = 3;
    Util.imgLoad(this.img = new Image(), "resource/object/fish.png");
}

function Igloo(){}
Igloo.prototype.img = null;
Igloo.prototype.name = null;
Igloo.prototype.type = null;
Igloo.prototype.init = function(){
    this.name = "igloo";
    this.type = 3;
    Util.imgLoad(this.img = new Image(), "resource/object/igloo.png");
}