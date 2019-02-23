var MapManager = new function(){
    var mapObject;
    var mapData;

    var waterImg;
    
    this.init = function(onLoad){
        mapObject = [
            new Wall(),
            new Water(),
            new Ice(),
            new Rock(),
            new Fish(),
            new Igloo()
        ];

        for(var i = 0; i < mapObject.length; i++){
            mapObject[i].init();
        }

        this.setMapData();
        Util.imgLoad(waterImg = new Image(), "resource/object/map.png", onLoad);
    }

    this.setMapData = function(){
        mapData = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 2, 2, 2, 1, 1, 1, 2, 2, 2, 0],
            [0, 2, 1, 1, 1, 4, 1, 1, 1, 2, 0],
            [0, 2, 1, 1, 1, 1, 1, 1, 1, 2, 0],
            [0, 1, 1, 1, 3, 1, 3, 1, 1, 1, 0],
            [0, 1, 4, 1, 1, 1, 1, 1, 4, 1, 0],
            [0, 1, 1, 1, 3, 1, 3, 1, 1, 1, 0],
            [0, 2, 1, 1, 1, 1, 1, 1, 1, 2, 0],
            [0, 2, 1, 1, 1, 4, 1, 1, 1, 2, 0],
            [0, 2, 2, 2, 1, 1, 1, 2, 2, 2, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
    }

    this.render = function(){
        for(var i = 0; i < mapData.length; i++){
            for(var j = 0; j < mapData[0].length; j++){
                ctx.drawImage(waterImg, 290 + (40 * i), 50 + (40 * j), 40, 40);
                mapObject[mapData[i][j]].render(290 + (40 * i), 50 + (40 * j));
            }
        }
    }

    this.destroy = function(){
        mapObject = null;
        mapData = null;
        waterImg = null;
    }

    this.getMapData = function(){
        return mapData;
    }
}