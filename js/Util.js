
var Util = new function(){
    //이미지 처리
    this.imgLoad = function(img, imgPath, callback){
        img.src = imgPath;
        img.onload = function(){
            console.log("Image Load success!! ", img);
            if(callback) callback();
        }
    }

    this.imgArrLoad = function(imgData, callback){
        for(var i = 0; i < imgData.length; i++){
            this.imgLoad(imgData[i][0], imgData[i][1], function(){
                if(i == imgData.length){
                    imgData[i - 1][0].onload = function(){
                        console.log("Image Arr Load success!! ");
                        callback();
                    }
                }
            });
        }
    }
}

