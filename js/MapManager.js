var MapManager = new function(){
    var objects;
    var mapObject;
    var mapData;

    var waterImg;
    
    this.init = function(onLoad){
        this.initMapData();
        objects = [
            new Wall(),
            new Water(),
            new Ice(),
            new Rock(),
            new Fish(),
            new Igloo()
        ];

        mapObject = [[], []];
        for(var i = 0; i < mapData.length - 1; i++){
            for(var j = 0; j < mapData[0].length - 1; j++){
                console.log(objects[mapData[i][j]]);
                console.log(mapData[i][j]);
                mapObject[i][j] = objects[mapData[i][j]];
                mapObject[i][j].init();
            }
        }
        onLoad();
        console.log(mapObject);
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
                ctx.drawImage(waterImg, 290 + (40 * i), 50 + (40 * j), 40, 40);
                mapObject[i][j].render(290 + (40 * i), 50 + (40 * j));
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
        mapObject[x][y] = objects[data];
    }

    this.getMapObject = function(x, y){
        return mapObject[x][y];
    }
}