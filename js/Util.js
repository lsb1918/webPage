
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

    this.imgArrLoad = function(imgPaths, callback){
        for(var i = 0; i < imgPaths.length; i++){
            var img = new Image();
            img.src = imgPath;
        }
    }
}

