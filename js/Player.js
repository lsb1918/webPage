var Player = function(data){
    var charObj = data;
    
    var score;
    
    var charIdx;

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
    var isSliding;
    var isWater;
    var isGameEnd;

    var slidingX;
    var slidingY;

    var curIce;

    var tempX;
    var tempY;

    var useCount; //턴 사용 횟수

	this.init = function(){
        charIdx = [1, 1];
        score = 0;
        
        isMove = false;
        isSliding = false;
        isWater = false;
        isGameEnd = false;

		_sx = START_POS_X + ( charIdx[0] * PIXEL);
		_sy = START_POS_Y + ( charIdx[1] * PIXEL);
		
		_dx = _sx;
		_dy = _sy;
		
		_x = _dx;
		_y = _dy;
		
        frameCnt = 0;

        tempX = 0;
        tempY = 0;

        useCount = 0;
 
        curIce = MapManager.getMapObject(charIdx[0], charIdx[1]);
	}

	this.update = function(){
        if(frameCnt < 3 && isMove){
            frameCnt++;
            _x = linearTween( frameCnt, _sx, _dx - _sx, 3 );
            _y = linearTween( frameCnt, _sy, _dy - _sy, 3 );

            //얼음이 플레이어 따라 움직어야함
			if(curIce != null && isSliding){
				curIce.update( _x, _y );
            }
            
            if(frameCnt == 3) {
                if(isWater){
                    //얼음 이동이 끝난 뒤에 남은 자리를 물로 채운다
                    var water = new Water();
                    water.init();
                    MapManager.setMapObject(tempX, tempY, water);
                }

                if(isGameEnd){
                    GameManager.setBehavior(STATE_GAME_CLEAR);
                }

                if(REST_COUNT - useCount == 0){
                    GameManager.setBehavior(STATE_GAME_OVER);
                }
            }
        }else{
            frameCnt = 0;
            isMove = 0;

            if(isSliding){
				collision(slidingX, slidingY);
			}
        }
	}
	
	this.render = function(){
        charObj.render(_x, _y, PIXEL, PIXEL);
    }

    this.destroy = function(){
        charObj = null;
        score = null;
        useCount = null;
        charIdx = null;
        START_POS_X = null;
        START_POS_Y = null;
    }

	this.keyAction = function( keyCode ) {
        if(isMove){ //이동중에는 키 안먹게 함
			return;
		}

		switch ( keyCode ) {
            case KEY_ENTER:
                break;
            case KEY_UP :
                collision(0, -1, true);
                break;
            case KEY_DOWN :
                collision(0, 1, true);
                break;
            case KEY_LEFT :
                collision(-1, 0, true);
                break;
            case KEY_RIGHT :
                collision(1, 0, true);
                break;
            default:
                break;
		}
    }

    this.getScore = function(){
        return score;
    }

    this.getRestCount = function(){
        return REST_COUNT - useCount;
    }

    var collision = function(moveX, moveY, isKeyPressed){
        slidingX = moveX;
        slidingY = moveY;
        var nextIdxX = charIdx[0] + moveX;
        var nextIdxY = charIdx[1] + moveY;

        var nextObjType = MapManager.getMapObject(nextIdxX, nextIdxY).getType();

        switch(nextObjType){
            case NUM_WALL :
                wallCollision();
                break;
            case NUM_WATER :
                WaterCollision(moveX, moveY, isKeyPressed);
                break;
            case NUM_ICE :
                IceCollision(moveX, moveY);
                break;
            case NUM_ROCK :
                RockCollision();
                break;
            case NUM_FISH :
                FishCollision(moveX, moveY, isKeyPressed);
                break;
            case NUM_IGLOO :
                IglooCollision(moveX, moveY);
                break;
        }
    }

    var wallCollision = function(){
        isMove = false;
        isSliding = false;
        isWater = false;
        isGameEnd = false;
        console.log("Collision wall...");
    }

    var WaterCollision = function(moveX, moveY, isKeyPressed){
        if(isKeyPressed) useCount++;

        isSliding = true;
        isMove = true;
        isWater = true;
        isGameEnd = false;

        //얼음도 플레이어와 같이 옮겨져야함
		var tmp = MapManager.getMapObject(charIdx[0], charIdx[1]);
        MapManager.setMapData(charIdx[0], charIdx[1], NUM_WATER);
        tempX = charIdx[0];
        tempY = charIdx[1];

		_sx = START_POS_X + ( charIdx[0] * PIXEL);
		_sy = START_POS_Y + ( charIdx[1] * PIXEL);
		
		charIdx[0] = charIdx[0] + moveX;
		charIdx[1] = charIdx[1] + moveY;
		
		_dx = START_POS_X + ( charIdx[0] * PIXEL);
        _dy = START_POS_Y + ( charIdx[1] * PIXEL);
        
        MapManager.setMapObject(charIdx[0], charIdx[1], tmp);

        console.log("Collision Water...");
    }

    var IceCollision = function(moveX, moveY){
        if(isSliding){
			isSliding = false;
			return;
		}
        isMove = true;
        isWater = false;
        isGameEnd = false;

        _sx = START_POS_X + ( charIdx[0] * PIXEL);
		_sy = START_POS_Y + ( charIdx[1] * PIXEL);
		
		charIdx[0] = charIdx[0] + moveX;
		charIdx[1] = charIdx[1] + moveY;
		
		_dx = START_POS_X + ( charIdx[0] * PIXEL);
        _dy = START_POS_Y + ( charIdx[1] * PIXEL);

        curIce = MapManager.getMapObject(charIdx[0], charIdx[1]);
        console.log("Collision Ice...");
    }

    var RockCollision = function(){
        isMove = false;
        isSliding = false;
        isWater = false;
        isGameEnd = false;
        console.log("Collision Rock...");
    }

    var FishCollision = function(moveX, moveY, isKeyPressed){
        if(isKeyPressed) useCount++;

        isSliding = true;
        isMove = true;
        isWater = true;
        isGameEnd = false;

        //얼음도 플레이어와 같이 옮겨져야함
		var tmp = MapManager.getMapObject(charIdx[0], charIdx[1]);
        MapManager.setMapData(charIdx[0], charIdx[1], NUM_WATER);
        tempX = charIdx[0];
        tempY = charIdx[1];

		_sx = START_POS_X + ( charIdx[0] * PIXEL);
		_sy = START_POS_Y + ( charIdx[1] * PIXEL);
		
		charIdx[0] = charIdx[0] + moveX;
		charIdx[1] = charIdx[1] + moveY;

		_dx = START_POS_X + ( charIdx[0] * PIXEL);
        _dy = START_POS_Y + ( charIdx[1] * PIXEL);

        MapManager.setMapObject(charIdx[0], charIdx[1], tmp);
        
        score++;

        console.log("Collision Fish...");
    }

    var IglooCollision = function(moveX, moveY){
        if(isSliding){
			isSliding = false;
			return;
        }
        
        isMove = true;
        isWater = false;
        isGameEnd = true;
        
        _sx = START_POS_X + ( charIdx[0] * PIXEL);
		_sy = START_POS_Y + ( charIdx[1] * PIXEL);
		
		charIdx[0] = charIdx[0] + moveX;
		charIdx[1] = charIdx[1] + moveY;
		
		_dx = START_POS_X + ( charIdx[0] * PIXEL);
        _dy = START_POS_Y + ( charIdx[1] * PIXEL);
        
        console.log("Collision Igloo...");
    }
    
    var linearTween = function(t, b, c, d){
		return( c * t / d + b );
	}
}