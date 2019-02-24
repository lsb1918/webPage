var Player = function(data){
    var charObj = data;
    
    var score;
    
    var charIdx;
    var startPosX;
    var startPosY;
	
	this.init = function(){
        charIdx = [1, 1];
        score = 0;
        startPosX = 290;
        startPosY = 50;
	}

	this.update = function(){
		
	}
	
	this.render = function(){
        charObj.render(startPosX + (40 * charIdx[0]), startPosY + (40 * charIdx[1]), 40, 40);
    }

    this.destroy = function(){
        charObj = null;
        score = null;
        charIdx = null;
        startPosX = null;
        startPosY = null;
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

    this.getScore = function(){
        return score;
    }

    var collision = function(moveX, moveY){
        var nextIdxX = charIdx[0] + moveX;
        var nextIdxY = charIdx[1] + moveY;

        var nextObjType = MapManager.getMapObject(nextIdxX, nextIdxY).getType();

        switch(nextObjType){
            case NUM_WALL :
                wallCollision();
                break;
            case NUM_WATER :
                WaterCollision(nextIdxX, nextIdxY);
                break;
            case NUM_ICE :
                IceCollision(nextIdxX, nextIdxY);
                break;
            case NUM_ROCK :
                RockCollision();
                break;
            case NUM_FISH :
                FishCollision(nextIdxX, nextIdxY);
                break;
            case NUM_IGLOO :
                IglooCollision(nextIdxX, nextIdxY);
                break;
        }
    }

    var wallCollision = function(){
        console.log("Collision wall...");
    }

    var WaterCollision = function(x, y){
        MapManager.setMapData(charIdx[0], charIdx[1], NUM_WATER);
        MapManager.setMapData(x, y, NUM_ICE);

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
        MapManager.setMapData(charIdx[0], charIdx[1], NUM_WATER);
        MapManager.setMapData(x, y, NUM_ICE);

        charIdx[0] = x;
        charIdx[1] = y;
        score++;

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