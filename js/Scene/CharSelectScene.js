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

            ctx.font = "bold 20px malgun gothic";
            ctx.fillText("ESC : 뒤로가기", 20, 50);
        },
        destroy: function(callback) {
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
                    break;
                case KEY_PREV:
                    UIManager.changeScene(TitleScene);
                    break;
            }
        },
        toString: function() {
            return "CharSelectScene";
        }
    };
};