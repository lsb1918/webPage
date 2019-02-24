var Player = function(data){
    var charObj = data;
    
    var score;
    
    var charIdx;
    var startPosX;
    var startPosY;
	
	this.init = function(){
        charIdx = [1, 1];
        startPosX = 290;
        startPosY = 50;
	}
	
	this.start = function(){
		
	}

	this.update = function(){
		
	}
	
	this.render = function(){		
        charObj.render(startPosX + (40 * charIdx[0]), startPosY + (40 * charIdx[1]), 40, 40);
    }

	this.keyAction = function( keyCode ) {
		switch ( keyCode ) {
            case KEY_ENTER:
                break;
            case KEY_UP :
                collision(0, -1);
                break;
            case KEY_DOWN :
                collision(0, 1);
                break;
            case KEY_LEFT :
                collision(-1, 0);
                break;
            case KEY_RIGHT :
                collision(1, 0);
                break;
            default:
                break;
		}
    }

    var collision = function(moveX, moveY){
        var nextIdxX = charIdx[0] + moveX;
        var nextIdxY = charIdx[1] + moveY;

        var nextObjType = MapManager.getMapObject(nextIdxX, nextIdxY).getType();

        switch(nextObjType){
            case 0 :
                wallCollision();
                break;
            case 1 :
                WaterCollision(nextIdxX, nextIdxY);
                break;
            case 2 :
                IceCollision(nextIdxX, nextIdxY);
                break;
            case 3 :
                RockCollision();
                break;
            case 4 :
                FishCollision(nextIdxX, nextIdxY);
                break;
            case 5 :
                IglooCollision(nextIdxX, nextIdxY);
                break;
        }
    }

    var wallCollision = function(){
        console.log("Collision wall...");
    }

    var WaterCollision = function(x, y){
        charIdx[0] = x;
        charIdx[1] = y;
        console.log("Collision Water...");
    }

    var IceCollision = function(x, y){
        charIdx[0] = x;
        charIdx[1] = y;
        console.log("Collision Ice...");
    }

    var RockCollision = function(){
        console.log("Collision Rock...");
    }

    var FishCollision = function(x, y){
        charIdx[0] = x;
        charIdx[1] = y;
        console.log("Collision Fish...");
    }

    var IglooCollision = function(x, y){
        charIdx[0] = x;
        charIdx[1] = y;
        console.log("Collision Igloo...");
    }
    
    var linearTween = function(t, b, c, d){
		return( c * t / d + b );
	}
}