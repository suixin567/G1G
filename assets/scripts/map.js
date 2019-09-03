// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        tiledMap:{
            type: cc.TiledMap,
            default: null,
        },
        startPos:{
            default: cc.v2(0, 0),
        },
        Player:{
            type: cc.Node,
            default: null,
        },
        wallPrefab:{
            type: cc.Prefab,
            default: null,
        }
    },

    onLoad: function () {
        //获取地图
        this.tiledMap = this.node.getComponent(cc.TiledMap);
        console.log("地图完整属性",this.tiledMap);
        //console.log("地图属性",this.tiledMap.getProperty("minTime"))

        var mapSize = this.tiledMap.getMapSize();
        console.log("地图大小",mapSize);
        var bglayer = this.tiledMap.getLayer("bg");
        console.log("背景层",bglayer)

        for (var i=0;i<mapSize.width;i++){
            for (var j=0;j<mapSize.height;j++){
                // console.log(i,j);
                var gid = bglayer.getTileGIDAt(j,i);//获得图块GID
                if (gid != 0){
                     console.log("gid",gid)
                     var properties = this.tiledMap.getPropertiesForGID(gid);

                    if (gid==50){
                        console.log("Properties!!!: " + properties['type']);
                        let pos = bglayer.getPositionAt(j, i);
                        cc.log("Pos: " + pos);

                        //创建碰撞体
                        // let collider = this.getComponent(cc.PhysicsBoxCollider);
                        // collider.size.width = width;
                        // collider.size.height = height;
                        // collider.apply();  // 调用apply以后才会重新生成box2d的相关对象
                        var loadobj =cc.instantiate(this.wallPrefab);//将预制体克隆到场景
                        this.node.addChild(loadobj);//将克隆出的物体作为子物体
                        //设置物体位置
                        loadobj.setPosition(cc.v2(pos.x + 16,pos.y + 16));
                    }
                }

            }
        }



        //对象层
        let objLayer = this.tiledMap.getObjectGroup('objLayer');
        console.log("对象层",objLayer)
        //获取对象层中的属性
        let player = objLayer.getObject('player');
        this.startPos.x = player.x;
        this.startPos.y = player.y;
        console.log("对象层的角色",player)
        this.Player.setPosition( this.startPos.x, this.startPos.y)
        this.Player.rotation = -player.rotation;


        var layer = this.tiledMap.getLayer('layer1');        //获取左上角瓦片坐标为（x,y）的图块的像素坐标
        // var pos = layer.getPositionAt(x,y);        //获得当前该图块的id,注意:这里的id是从1开始的,与TiledMap Editor中显示的不同,如果返回值为0,则为空）
        // var gid = layer.getTileGIDAt(0,0);
        console.log("层：",layer)


    },

});
