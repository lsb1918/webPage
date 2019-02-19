
var Util = new function(){
    //이미지 처리
    this.imgLoad = function(imgPath, callback){
        var img = new Image();
        img.src = imgPath;
        img.onload = function(){
            console.log(img);
            if(callback) callback();
        }
        
        return img;
    }
}

