//type => 0 : 벽돌, 1 : 물, 2 : 빙판, 3 : 바위, 4 : 물고기, 5 : 녹는 빙판, 6 : 이글루

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
    this.type = 0;
    Util.imgLoad(this.img = new Image(), "resource/object/wall.png");
}

function Water(){}
Water.prototype = new MapObject();
Water.prototype.img = null;
Water.prototype.name = null;
Water.prototype.type = null;
Water.prototype.init = function(){
    this.name = "water";
    this.type = 1;
    Util.imgLoad(this.img = new Image(), "resource/object/map.png");
}

function Ice(){}
Ice.prototype = new MapObject();
Ice.prototype.img = null;
Ice.prototype.name = null;
Ice.prototype.type = null;
Ice.prototype.init = function(){
    this.name = "ice";
    this.type = 2;
    Util.imgLoad(this.img = new Image(), "resource/object/ice2.png");
}

function Rock(){}
Rock.prototype = new MapObject();
Rock.prototype.img = null;
Rock.prototype.name = null;
Rock.prototype.type = null;
Rock.prototype.init = function(){
    this.name = "rock";
    this.type = 3;
    Util.imgLoad(this.img = new Image(), "resource/object/rock.png");
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
    this.type = 4;
    this.count = 0;
    Util.imgLoad(this.img = new Image(), "resource/object/fish.png");
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
    this.type = 5;
    Util.imgLoad(this.img = new Image(), "resource/object/igloo.png");
}