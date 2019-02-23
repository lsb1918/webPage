//TODO. 페이징 추가 예정
var CharSelectScene = new function(){
    var characters = [];
    var curFocusIdx;
    var focusX;
    var focusY;

    return{
        init: function(onLoad) {
            curFocusIdx = 0;
            rectCount = 0;
            focusX = [130, 400, 670, 130, 400, 670];
            focusY = [120, 120, 120, 320, 320, 320];

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
            rectCount++;
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

            ctx.strokeStyle = "#FF0000";
            ctx.lineWidth = 6;
            ctx.lineJoin = "round";
            ctx.strokeRect(focusX[curFocusIdx], focusY[curFocusIdx], 140, 180);
        },
        destroy: function(callback) {
            characters = null;
            curFocusIdx = null;
            focusX = null;
            focusY = null;
            callback();
        },
        keyPressed: function(e) {
            switch(e.keyCode){
                case KEY_LEFT:
                    if(curFocusIdx > 0) curFocusIdx--;
                    else curFocusIdx = 5;
                    break;
                case KEY_RIGHT:
                    if(curFocusIdx < 5) curFocusIdx++;
                    else curFocusIdx = 0;
                    break;
                case KEY_UP:
                    if(curFocusIdx < 3) curFocusIdx += 3;
                    else curFocusIdx -= 3;
                    break;
                case KEY_DOWN:
                    if(curFocusIdx < 3) curFocusIdx += 3;
                    else curFocusIdx -= 3;
                    break;
                case KEY_ENTER:
                    UIManager.changeScene(LoadingScene, characters[curFocusIdx]);
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