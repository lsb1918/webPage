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
        },
        update: function(){
            count++;
            UIManager.repaint();
        },
        render: function() {
            ctx.drawImage(background, 0, 0);
            if(count < 20){
                console.log("11");
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
        keyPressed: function() {},
        toString: function() {
            return "TitleScene";
        }
    };
};