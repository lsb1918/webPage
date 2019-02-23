var GameScene = new function(){
    var charObj;

    var charIdx;
    var charX;
    var charY;

    return{
        init: function(onLoad, data) {
            charObj = data;

            charIdx = [0, 0];
            charX = 330;
            charY = 90;
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

            charObj.render(charX + (40 * charIdx[0]), charY + (40 *charIdx[1]), 40, 40);
        },
        destroy: function(callback) {
            callback();
        },
        keyPressed: function(e) {
            switch(e.keyCode){
                case KEY_LEFT:
                    if(charIdx[0] > 0) charIdx[0]--;
                    break;
                case KEY_RIGHT:
                    if(charIdx[0] < MapManager.getMapData().length - 3) charIdx[0]++;
                    console.log(charIdx[0] + ", " + MapManager.getMapData().length);
                    break;
                case KEY_UP:
                    if(charIdx[1] > 0) charIdx[1]--;
                    break;
                case KEY_DOWN:
                    if(charIdx[1] < MapManager.getMapData()[0].length - 3) charIdx[1]++;
                    console.log(charIdx[1] + ", " + MapManager.getMapData()[0].length);
                    break;
                case KEY_ENTER:

                    break;
                case KEY_PREV:

                    break;
            }
        },
        toString: function() {
            return "GameScene";
        }
    };
};