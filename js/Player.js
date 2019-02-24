var Player = function(data){
    var charObj = data;
    console.log(charObj);
    
    var score;
    
    var charIdx = [0, 0];
    var posX;
    var posY;
	
	this.init = function(){
        charIdx = [0, 0];
        posX = 330;
        posY = 90;
	}
	
	this.start = function(){
		
	}

	this.update = function(){
		
	}
	
	this.render = function(){		
        charObj.render(posX + (40 * charIdx[0]), posY + (40 * charIdx[1]), 40, 40);
	}

	this.keyAction = function( keyCode ) {
		switch ( keyCode ) {
		case KEY_ENTER:
			break;
		case KEY_UP :
			break;
		case KEY_DOWN :
			break;
		case KEY_LEFT :
			break;
		case KEY_RIGHT :
			break;
		default:
			break;
		}
    }
    
    var linearTween = function(t, b, c, d){
		return( c * t / d + b );
	}
}