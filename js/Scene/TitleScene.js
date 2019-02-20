var TitleScene = new function(){
    var background;
    var count;

    return{
        init: function(onLoad) {
            count = 0;
            background = Util.imgLoad("resource/title.jpg", onLoad);
        },
        start: function(onLoad) {
            onLoad();
            setTimeout(function(){
                $('#loading').hide();
                $('#container').show();
                $('#keyArea').show();
            }, 1000);
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
            callback();
        },
        keyPressed: function(e) {
            console.log(e.keyCode);
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