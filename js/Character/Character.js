function Character(){}
Character.prototype.img = null;
Character.prototype.name = null;
Character.prototype.init = function(){}
Character.prototype.render = function(){
    g.drawImage(this.img, x, y);
}
Character.prototype.getString = function(){
    return this.name;
}

function Bebe(){}
Bebe.prototype = new Character()
Bebe.prototype.init = function(){
    this.name = "bebe";
    this.img = Util.imgLoad("resource/character/bebe.png");
}
// Bebe.prototype.render = function(x, y){
//     g.drawImage(this.img, x, y);
// }
// Bebe.prototype.getString = function(x, y){
//     return this.name;
// }

function Kaze(){}
Kaze.prototype = new Character()
Kaze.prototype.init = function(){
    this.name = "kaze";
    this.img = Util.imgLoad("resource/character/kaze.png");
}
// Kaze.prototype.render = function(x, y){
//     g.drawImage(this.img, x, y);
// }
// Kaze.prototype.getString = function(x, y){
//     return this.name;
// }