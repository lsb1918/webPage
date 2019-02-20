function Character(){}
Character.prototype.img = null;
Character.prototype.name = null;
Character.prototype.init = function(){}
Character.prototype.render = function(){}

function Bebe(){}
Bebe.prototype = new Character()
Bebe.prototype.init = function(){
    this.img = Util.imgLoad("");
}
