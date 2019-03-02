function Character(){}
Character.prototype.img = null;
Character.prototype.name = null;
Character.prototype.init = function(){}
Character.prototype.render = function(x, y, w, h){
    if(w && h) ctx.drawImage(this.img, x, y, w, h);
    else ctx.drawImage(this.img, x, y);
}
Character.prototype.getString = function(){
    return this.name;
}

function Bebe(){}
Bebe.prototype = new Character();
Bebe.prototype.init = function(){
    this.name = "베베";
    Util.imgLoad(this.img = new Image(), "resource/character/bebe.png");
}

function Kaze(){}
Kaze.prototype = new Character();
Kaze.prototype.init = function(){
    this.name = "카제";
    Util.imgLoad(this.img = new Image(), "resource/character/kaze.png");
}

function Luga(){}
Luga.prototype = new Character();
Luga.prototype.init = function(){
    this.name = "루가";
    Util.imgLoad(this.img = new Image(), "resource/character/luga.png");
}

function Rein(){}
Rein.prototype = new Character();
Rein.prototype.init = function(){
    this.name = "레인";
    Util.imgLoad(this.img = new Image(), "resource/character/rein.png");
}

function Onnul(){}
Onnul.prototype = new Character();
Onnul.prototype.init = function(){
    this.name = "온눌";
    Util.imgLoad(this.img = new Image(), "resource/character/onnul.png");
}

function Wari(){}
Wari.prototype = new Character();
Wari.prototype.init = function(){
    this.name = "워리";
    Util.imgLoad(this.img = new Image(), "resource/character/wari2.gif");
}

