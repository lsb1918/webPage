var TitleScene = new function(){
    var background;

    var count;

    return{
        init: function(onLoad) {
            count = 0;
            Util.imgLoad(background = new Image(), "resource/title.jpg", onLoad);
        },
        start: function(onLoad) {
            setTimeout(function(){
                Loading.stop();
            }, 1000);

            onLoad();
        },
        update: function(){
            count++;
            UIManager.repaint();
        },
        render: function() {
            ctx.drawImage(background, 0, 0);
            if(count < 20){
                ctx.font = "bold 40px malgun gothic";
                ctx.fillText("Press Enter", 500, 270);
            }else{
                setTimeout(function(){
                    count = 0;
                },1000);
            }
        },
        destroy: function(callback) {
            background = null;
            count = null;
            callback();
        },
        keyPressed: function(e) {
            switch(e.keyCode){
                case KEY_LEFT:
                    break;
                case KEY_RIGHT:
                    break;
                case KEY_UP:
                    break;
                case KEY_DOWN:
                    break;
                case KEY_ENTER:
                    UIManager.changeScene(CharSelectScene);
                    break;
            }
        },
        toString: function() {
            return "TitleScene";
        }
    };
};