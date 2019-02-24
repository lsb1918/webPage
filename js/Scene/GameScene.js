var GameScene = new function(){
    var charObj;

    var charIdx;
    var charX;
    var charY;

    var curMapData;

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
            UIManager.repaint();
        },
        render: function() {
            MapManager.render();
            player.render();
        },
        destroy: function(callback) {
            callback();
        },
        keyPressed: function(e) {
            player.keyAction(e.keyCode);
            // switch(e.keyCode){
            //     case KEY_LEFT:
                    
            //         break;
            //     case KEY_RIGHT:
                    
            //         break;
            //     case KEY_UP:
                    
            //         break;
            //     case KEY_DOWN:
                   
            //         break;
            //     case KEY_ENTER:
            //         break;
            //     case KEY_PREV:

            //         break;
            // }
        },
        toString: function() {
            return "GameScene";
        }
    };
};