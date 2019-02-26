var LoadingScene = new function(){
    var loadingImg;
    var loadingWidth;
    var charObj;

    return{
        init: function(onLoad, data) {
            charObj = data;
            loadingWidth = 20;
            
            Util.imgLoad(loadingImg = new Image(), "resource/loading.png");
            Util.imgLoad(wallImg = new Image(), "resource/object/wall.png");
            Util.imgLoad(waterImg = new Image(), "resource/object/map.png");
            Util.imgLoad(iceImg = new Image(), "resource/object/ice2.png");
            Util.imgLoad(rockImg = new Image(), "resource/object/rock.png");
            Util.imgLoad(fishImg = new Image(), "resource/object/fish.png");
            Util.imgLoad(iglooImg = new Image(), "resource/object/igloo.png", function(){
                loadingWidth += 30;
                MapManager.init(onLoad);
            });
            
        },
        start: function(onLoad) {
            onLoad();
        },
        update: function(){
            if(loadingWidth < 350) {
                loadingWidth += 30;
            }else {
                loadingWidth = 350;
                UIManager.changeScene(GameScene, charObj);
            }
            UIManager.repaint();
        },
        render: function() {
            ctx.drawImage(loadingImg, 290, 30);
            
            ctx.strokeStyle = "#000000";
            ctx.lineWidth = 1;
            ctx.strokeRect(320, 450, 350, 20);

            ctx.fillStyle = "#5CD1E5";
            ctx.fillRect(320, 450, loadingWidth, 20);
        },
        destroy: function(callback) {
            callback();
        },
        keyPressed: function(e) {},
        toString: function() {
            return "LoadingScene";
        }
    };
};