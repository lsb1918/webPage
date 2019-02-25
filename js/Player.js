var Player = function(data){
    var charObj = data;
    
    var score;
    
    var charIdx;
    var startPosX;
    var startPosY;

    //실제 화면에 출력됨
	var _x;
	var _y;
	
	//출발 지점
	var _sx;
	var _sy;
	
	//도착 지점
	var _dx;
    var _dy;
    
    var frameCnt = 0;

    var isMove;
	
	this.init = function(){
        charIdx = [1, 1];
        score = 0;
        startPosX = 290;
        startPosY = 50;
        
        isMove = false;

		_sx = startPosX + ( charIdx[0] * 40);
		_sy = startPosY + ( charIdx[1] * 40);
		
		_dx = _sx;
		_dy = _sy;
		
		_x = _dx;
		_y = _dy;
		
        frameCnt = 0;
	}

	this.update = function(){
        if(frameCnt < 5 && isMove){
            frameCnt++;
            _x = linearTween( frameCnt, _sx, _dx - _sx, 5 );
            _y = linearTween( frameCnt, _sy, _dy - _sy, 5 );
        }else{
            frameCnt = 0;
            isMove = 0;
        }
	}
	
	this.render = function(){
        charObj.render(_x, _y, 40, 40);
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
                WaterCollision(moveX, moveY);
                break;
            case NUM_ICE :
                IceCollision(moveX, moveY);
                break;
            case NUM_ROCK :
                RockCollision();
                break;
            case NUM_FISH :
                FishCollision(moveX, moveY);
                break;
            case NUM_IGLOO :
                IglooCollision(moveX, moveY);
                break;
        }
    }

    var wallCollision = function(){
        console.log("Collision wall...");
    }

    var WaterCollision = function(moveX, moveY){
        isMove = true;

        MapManager.setMapData(charIdx[0], charIdx[1], NUM_WATER);

		_sx = startPosX + ( charIdx[0] * 40);
		_sy = startPosY + ( charIdx[1] * 40);
		
		charIdx[0] = charIdx[0] + moveX;
		charIdx[1] = charIdx[1] + moveY;

		MapManager.setMapData(charIdx[0], charIdx[1], NUM_ICE);
		
		_dx = startPosX + ( charIdx[0] * 40);
		_dy = startPosY + ( charIdx[1] * 40);

        console.log("Collision Water...");
    }

    var IceCollision = function(moveX, moveY){
        isMove = true;

        _sx = startPosX + ( charIdx[0] * 40);
		_sy = startPosY + ( charIdx[1] * 40);
		
		charIdx[0] = charIdx[0] + moveX;
		charIdx[1] = charIdx[1] + moveY;
		
		_dx = startPosX + ( charIdx[0] * 40);
        _dy = startPosY + ( charIdx[1] * 40);
        
        MapManager.setMapData(charIdx[0], charIdx[1], NUM_ICE);

        console.log("Collision Ice...");
    }

    var RockCollision = function(){
        console.log("Collision Rock...");
    }

    var FishCollision = function(moveX, moveY){
        isMove = true;

        MapManager.setMapData(charIdx[0], charIdx[1], NUM_WATER);

		_sx = startPosX + ( charIdx[0] * 40);
		_sy = startPosY + ( charIdx[1] * 40);
		
		charIdx[0] = charIdx[0] + moveX;
		charIdx[1] = charIdx[1] + moveY;

		MapManager.setMapData(charIdx[0], charIdx[1], NUM_ICE);
		
		_dx = startPosX + ( charIdx[0] * 40);
        _dy = startPosY + ( charIdx[1] * 40);
        
        score++;

        console.log("Collision Fish...");
    }

    var IglooCollision = function(moveX, moveY){
        charIdx[0] = x;
        charIdx[1] = y;
        console.log("Collision Igloo...");
    }
    
    var linearTween = function(t, b, c, d){
		return( c * t / d + b );
	}
}