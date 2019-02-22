var CharSelectScene = new function(){
    var characters = [];

    return{
        init: function(onLoad) {
            characters = new Array();
            characters[0] = new Bebe();
            characters[1] = new Kaze();
            characters[2] = new Luga();
            characters[3] = new Onnul();
            characters[4] = new Rein();
            characters[5] = new Wari();

            for(var i = 0; i < characters.length; i++){
                characters[i].init();
            }
            onLoad();
        },
        start: function(onLoad) {
            onLoad();
        },
        update: function(){
            UIManager.repaint();
        },
        render: function() {
            ctx.font = "bold 20px malgun gothic";
            ctx.fillText("ESC : 뒤로가기", 20, 50);

            ctx.font = "bold 30px malgun gothic";
            ctx.fillText("캐릭터를 선택해주세요.", 320, 100);

            ctx.font = "bold 20px malgun gothic";
            for(var i = 0; i < 3; i++ ){
                characters[i].render(150 + (270 * i), 130);
                ctx.fillText(characters[i].name, 180 + (270 * i), 285);
            }

            for(var i = 3; i < 6; i++ ){
                characters[i].render(150 + (270 * (i - 3)), 330);
                ctx.fillText(characters[i].name, 180 + (270 * (i - 3)), 490);
            }
        },
        destroy: function(callback) {
            characters = null;
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