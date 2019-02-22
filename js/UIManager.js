var canvas;
var ctx;


var UIManager = new function(){
    var curScene;

    this.init = function(){
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");

        document.addEventListener("keydown", this.keyDownHandler, false);
        var arrowBack = document.getElementById("arrowBack");
        var arrawLeft = document.getElementById("arrawLeft");
        var arrawRight = document.getElementById("arrawRight");
        var arrawUp = document.getElementById("arrawUp");
        var arrawDown = document.getElementById("arrawDown");
        var ok = document.getElementById("ok");

        arrowBack.addEventListener("click", this.prevKeyPressed, false);
        arrawLeft.addEventListener("click", this.leftKeyPressed, false);
        arrawRight.addEventListener("click", this.rightPressed, false);
        arrawUp.addEventListener("click", this.upKeyPressed, false);
        arrawDown.addEventListener("click", this.downKeyPressed, false);
        ok.addEventListener("click", this.okKeyPressed, false);

        curScene = TitleScene;
        curScene.init(function(){
            console.log(curScene.toString() + " Init!!");
            curScene.start(function(){
                console.log(curScene.toString() + " Start!!");
                this.update;
                console.log("UIManager Init!!");
            });
        });        
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

        curScene.keyPressed(e);
        console.log(curScene.toString() + " >>> " + e.keyCode);
    };

    ///////마우스 클릭 이벤트///////
    this.prevKeyPressed = function(e){
        e.keyCode = KEY_PREV;

        curScene.keyPressed(e);
        console.log("[Click] " + curScene.toString() + " >>> " + e.keyCode);
    };

    this.leftKeyPressed = function(e){
        e.keyCode = KEY_LEFT;

        curScene.keyPressed(e);
        console.log("[Click] " + curScene.toString() + " >>> " + e.keyCode);
    };

    this.rightPressed = function(e){
        e.keyCode = KEY_RIGHT;

        curScene.keyPressed(e);
        console.log("[Click] " + curScene.toString() + " >>> " + e.keyCode);
    }

    this.upKeyPressed = function(e){
        e.keyCode = KEY_UP;

        curScene.keyPressed(e);
        console.log("[Click] " + curScene.toString() + " >>> " + e.keyCode);
    };

    this.downKeyPressed = function(e){
        e.keyCode = KEY_DOWN;

        curScene.keyPressed(e);
        console.log("[Click] " + curScene.toString() + " >>> " + e.keyCode);
    };

    this.okKeyPressed = function(e){
        e.keyCode = KEY_ENTER;

        curScene.keyPressed(e);
        console.log("[Click] " + curScene.toString() + " >>> " + e.keyCode);
    }
};