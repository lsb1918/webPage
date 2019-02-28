var GameScene = new function(){

    return{
        init: function(onLoad) {
            onLoad();
        },
        start: function(onLoad) {
            onLoad();
        },
        update: function(){
            GameManager.update();
            UIManager.repaint();
        },
        render: function() {
            GameManager.render();
        },
        destroy: function(callback) {
            GameManager.destroy();
            callback();
        },
        keyPressed: function(e) {
            GameManager.getBehavior().keyAction(e.keyCode);
        },
        toString: function() {
            return "GameScene";
        }
    };
};