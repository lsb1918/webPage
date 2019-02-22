function Character(){}
Character.prototype.img = null;
Character.prototype.name = null;
Character.prototype.init = function(){}
Character.prototype.render = function(){
    ctx.drawImage(this.img, x, y);
}
Character.prototype.getString = function(){
    return this.name;
}

function Bebe(){}
Bebe.prototype = new Character()
Bebe.prototype.init = function(){
    this.name = "베베";
    Util.imgLoad(this.img = new Image(), "resource/character/bebe.png");
}
Bebe.prototype.render = function(x, y){
    ctx.drawImage(this.img, x, y);
}
Bebe.prototype.getString = function(x, y){
    return this.name;
}

function Kaze(){}
Kaze.prototype = new Character()
Kaze.prototype.init = function(){
    this.name = "카제";
    Util.imgLoad(this.img = new Image(), "resource/character/kaze.png");
}
Kaze.prototype.render = function(x, y){
    ctx.drawImage(this.img, x, y);
}
Kaze.prototype.getString = function(x, y){
    return this.name;
}

function Luga(){}
Luga.prototype = new Character()
Luga.prototype.init = function(){
    this.name = "루가";
    Util.imgLoad(this.img = new Image(), "resource/character/luga.png");
}
Luga.prototype.render = function(x, y){
    ctx.drawImage(this.img, x, y);
}
Luga.prototype.getString = function(x, y){
    return this.name;
}

function Rein(){}
Rein.prototype = new Character()
Rein.prototype.init = function(){
    this.name = "레인";
    Util.imgLoad(this.img = new Image(), "resource/character/rein.png");
}
Rein.prototype.render = function(x, y){
    ctx.drawImage(this.img, x, y);
}
Rein.prototype.getString = function(x, y){
    return this.name;
}

function Onnul(){}
Onnul.prototype = new Character()
Onnul.prototype.init = function(){
    this.name = "온눌";
    Util.imgLoad(this.img = new Image(), "resource/character/onnul.png");
}
Onnul.prototype.render = function(x, y){
    ctx.drawImage(this.img, x, y);
}
Onnul.prototype.getString = function(x, y){
    return this.name;
}

function Wari(){}
Wari.prototype = new Character()
Wari.prototype.init = function(){
    this.name = "워리";
    Util.imgLoad(this.img = new Image(), "resource/character/wari.png");
}
Wari.prototype.render = function(x, y){
    ctx.drawImage(this.img, x, y);
}
Wari.prototype.getString = function(x, y){
    return this.name;
}

