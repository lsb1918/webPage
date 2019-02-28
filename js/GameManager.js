var GameManager = new function(){
    var player;

    var behaviors;
    var curBehavior;

    var explainImg;
    var endImg;

    this.init = function(charObj, callback){
        Util.imgLoad(endImg = new Image(), "resource/end.jpg");
        Util.imgLoad(explainImg = new Image(), "resource/explain.jpg", function(){
            player = new Player(charObj);
            player.init();
    
            GameManager.initBehavior();
            console.log(curBehavior);
            callback();
        });
    }

    this.update = function(){
        curBehavior.update();
    }

    this.render = function(){
        curBehavior.render();
    }

    this.destroy = function(){
        player = null;

        behaviors = null;
        curBehavior = null;
    
        explainImg = null;
        endImg = null;
    }

    this.keyPressed = function(keyCode){
        curBehavior.keyAction(keyCode);
    }

    this.initBehavior = function(){
        behaviors = new Array();

        //게임 플레이 화면
        behaviors[STATE_PLAY] = new function(){
            this.init = function(){}
            this.update = function(){
                player.update();
            }
            this.render = function(){
                ctx.fillStyle = "#000000";
                ctx.font = "bold 20px malgun gothic";
                ctx.fillText("ESC : 게임종료", 20, 50);
                ctx.fillText("E : 게임 설명", 20, 80);
                ctx.fillText("Score : " + player.getScore(), 20, 110);

                MapManager.render();
                player.render();
            }
            this.keyAction = function(keyCode){
                if(keyCode == 69) GameManager.setBehavior(STATE_EXPLAIN);
                else if(keyCode == KEY_PREV) GameManager.setBehavior(STATE_EXIT);
                else player.keyAction(keyCode);
            }
        };

        //게임 설명 화면
        behaviors[STATE_EXPLAIN] = new function(){
            this.init = function(){}
            this.update = function(){}
            this.render = function(){
                ctx.fillStyle = "#000000";
                ctx.font = "bold 20px malgun gothic";
                ctx.fillText("ESC : 뒤로가기", 20, 50);

                ctx.drawImage(explainImg, 30, 50, 940, 480);
            }
            this.keyAction = function(keyCode){
                if(keyCode == KEY_PREV || keyCode == "69") GameManager.setBehavior(STATE_PLAY);
            }
        };

        // //게임 종료 확인 팝업
        behaviors[STATE_EXIT] = new function(){
            var focusX = [290, 530];
            var focusIdx;

            this.init = function(){
                focusIdx = 0;
            }
            this.update = function(){}
            this.render = function(){
                ctx.fillStyle = "#000000";
                ctx.font = "bold 30px malgun gothic";
                ctx.fillText("게임을 종료하시겠습니까?", 300, 200);

                ctx.fillStyle = "#000000";
                ctx.font = "bold 30px malgun gothic";
                var width = ctx.measureText("예").width;
                ctx.fillText("예", 290 + (140 / 2) - (width / 2), 300 + 33);
                width = ctx.measureText("아니오").width;
                ctx.fillText("아니오", 530 + (140 / 2) - (width / 2), 300 + 33);

                ctx.strokeStyle = "#000000";
                ctx.lineWidth = 2;
                ctx.strokeRect(290, 300, 140, 50);
                ctx.strokeRect(530, 300, 140, 50);

                ctx.strokeStyle = "#FF0000";
                ctx.lineWidth = 6;
                ctx.lineJoin = "round";
                ctx.strokeRect(focusX[focusIdx], 300, 140, 50);
            }
            this.keyAction = function(keyCode){
                if(keyCode == KEY_ENTER) {
                    if(focusIdx == 0){
                        UIManager.changeScene(TitleScene);
                    }else{
                        GameManager.setBehavior(STATE_PLAY);
                    }
                }else if(keyCode == KEY_LEFT || keyCode == KEY_RIGHT){
                    focusIdx = focusIdx == 0 ? 1 : 0;
                }
            }
        }

        // //게임 종료 확인 팝업
        behaviors[STATE_END] = new function(){
            this.init = function(){}
            this.update = function(){}
            this.render = function(){
                ctx.drawImage(endImg, 100, 100);
            }
            this.keyAction = function(keyCode){
                if(keyCode == KEY_ENTER) {
                    UIManager.changeScene(TitleScene);
                }
            }
        };

        this.setBehavior(STATE_PLAY);
    }

    this.setBehavior = function(state){
        curBehavior = behaviors[state];
        curBehavior.init();
    }

    this.getBehavior = function(){
        return curBehavior;
    }
}