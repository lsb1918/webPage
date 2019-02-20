var CharSelectScene = new function(){

    return{
        init: function(onLoad) {
        },
        start: function(onLoad) {
            onLoad();
        },
        update: function(){
            UIManager.repaint();
        },
        render: function() {
            ctx.font = "bold 40px malgun gothic";
            ctx.fillText("캐릭터 선택화면", 340, 270);
        },
        destroy: function(callback) {
            callback();
        },
        keyPressed: function() {},
        toString: function() {
            return "CharSelectScene";
        }
    };
};