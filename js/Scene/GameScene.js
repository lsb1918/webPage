var GameScene = new function(){
    var charObj;
    var player;

    return{
        init: function(onLoad, data) {
            charObj = data;

            player = new Player(charObj);
            player.init();

            onLoad();
        },
        start: function(onLoad) {
            onLoad();
        },
        update: function(){
            player.update();
            UIManager.repaint();
        },
        render: function() {
            ctx.fillStyle = "#000000";
            ctx.font = "bold 20px malgun gothic";
            ctx.fillText("ESC : 게임종료", 20, 50);
            ctx.fillText("T : 게임 설명", 20, 80);
            ctx.fillText("Score : " + player.getScore(), 20, 110);

            MapManager.render();
            player.render();
        },
        destroy: function(callback) {
            MapManager.destroy();
            player.destroy();
            charObj = null;
            player = null;
            callback();
        },
        keyPressed: function(e) {
            if(e.keyCode == 84) console.log("게임 설명 팝업");
            else if(e.keyCode == KEY_PREV) console.log("게임 종료 팝업");
            else player.keyAction(e.keyCode);
        },
        toString: function() {
            return "GameScene";
        }
    };
};

var Popup = new function(){
    this.render = function(){

    }
}