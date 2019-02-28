var MapManager = new function(){
    var mapObject;
    var mapData;
    
    this.init = function(onLoad){
        this.initMapData();

        //2차원배열 선언
        mapObject = Array.from(Array(mapData.length), () => Array());
        for(var i = 0; i < mapData.length; i++){
            for(var j = 0; j < mapData[0].length; j++){
                if(mapData[i][j] == NUM_WALL) {
                    mapObject[i].push(new Wall());
                }else if(mapData[i][j] == NUM_WATER){
                    mapObject[i].push(new Water());
                }else if(mapData[i][j] == NUM_ICE){
                    mapObject[i].push(new Ice());
                }else if(mapData[i][j] == NUM_ROCK){
                    mapObject[i].push(new Rock());
                }else if(mapData[i][j] == NUM_FISH){
                    mapObject[i].push(new Fish());
                }else if(mapData[i][j] == NUM_IGLOO){
                    mapObject[i].push(new Igloo());
                }
                mapObject[i][j].init(START_POS_X + (PIXEL * i), START_POS_Y + (PIXEL * j));
            }
        }

        onLoad();
    }

    this.initMapData = function(){
        mapData = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 2, 2, 2, 1, 1, 1, 2, 2, 2, 0],
            [0, 2, 1, 1, 1, 4, 1, 1, 1, 2, 0],
            [0, 2, 1, 1, 1, 1, 1, 1, 1, 2, 0],
            [0, 1, 1, 1, 2, 1, 2, 1, 1, 1, 0],
            [0, 1, 4, 1, 1, 5, 1, 3, 4, 1, 0],
            [0, 1, 1, 3, 2, 1, 2, 1, 1, 1, 0],
            [0, 2, 1, 1, 1, 1, 3, 1, 1, 2, 0],
            [0, 2, 1, 1, 1, 4, 1, 1, 1, 2, 0],
            [0, 2, 2, 2, 1, 1, 1, 2, 2, 2, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
    }

    this.render = function(){
        for(var i = 0; i < mapData.length; i++){
            for(var j = 0; j < mapData[0].length; j++){
                ctx.drawImage(waterImg, START_POS_X + (PIXEL * i), START_POS_Y + (PIXEL * j), PIXEL, PIXEL);
                mapObject[i][j].render();
            }
        }
    }

    this.destroy = function(){
        mapObject = null;
        mapData = null;

        wallImg = null;
        waterImg = null;
        iceImg = null;
        rockImg = null;
        fishImg = null;
        iglooImg = null;
    }

    this.setMapData = function(x, y, data){
        mapData[x][y] = data;
    }

    this.setMapObject = function(x, y, object){
        mapObject[x][y] = object;
    }

    this.getMapObject = function(x, y){
        return mapObject[x][y];
    }
}