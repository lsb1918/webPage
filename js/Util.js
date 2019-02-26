
var Util = new function(){
    //이미지 처리
    this.imgLoad = function(img, imgPath, callback){
        img.src = imgPath;
        img.onload = function(){
            console.log("Image Load success!! ", img);
            if(callback) callback();
        }
    }
}

