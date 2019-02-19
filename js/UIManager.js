var canvas;
var g;


var UIManager = new function(){
    var curScene;

    this.init = function(){
        canvas = document.getElementById("container");
        g = canvas.getContext("2d");
        curScene = TitleScene;
        curScene.init();

        this.update;
        console.log("UIManager Init!!");
    };

    this.update = setInterval(() => {
        curScene.update(); 
    }, 300);

    this.paint = function(){
        g.clearRect(0, 0, g.cavas.width, g.canvas.height);
        curScene.render();
    };

    this.stop = function(){
        clearInterval(this.update);
    };

    this.changeScene = function(scene){
        if(scene == curScene){
            console.log("Same Scene..");
            return;
        }

        curScene.destroy(function(){
            console.log(curScene.toString() + " Destroy!!");
            curScene = scene;
            curScene.init(function(){
                console.log(curScene.toString() + " Init!!");
                curScene.start(function(){
                    console.log(curScene.toString() + " Start!!");
                });
            });
        });
    };
};