var canvas;
var ctx;


var UIManager = new function(){
    var curScene;

    this.init = function(){
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");

        document.addEventListener("keydown", this.keyDownHandler, false);

        curScene = TitleScene;
        curScene.init(function(){
            console.log(curScene.toString() + " Init!!");
            curScene.start(function(){
                console.log(curScene.toString() + " Start!!");
            });
        });

        this.update;
        console.log("UIManager Init!!");
    };

    this.update = setInterval(() => {
        curScene.update(); 
    }, 100);

    this.repaint = function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
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

    this.keyDownHandler = function(e){
        e = e || window.event;
        // console.log(e);

        curScene.keyPressed(e);
        console.log(curScene.toString() + " >>> " + e.keyCode);
    };
};