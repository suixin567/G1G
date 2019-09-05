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
        },
        wallPrefab1:{
            type: cc.Prefab,
            default: null,
        },
        wallPrefab2:{
            type: cc.Prefab,
            default: null,
        },
        wallPrefab3:{
            type: cc.Prefab,
            default: null,
        },
        wallPrefab4:{
            type: cc.Prefab,
            default: null,
        },
        Previous: {
            type:cc.Node,
            default: null,
        }
    },

    onLoad: function () {
        console.log("计算",64%32);
        //获取地图
        this.tiledMap = this.node.getComponent(cc.TiledMap);
        // console.log("地图完整属性",this.tiledMap);
        //console.log("地图属性",this.tiledMap.getProperty("minTime"))

        var mapSize = this.tiledMap.getMapSize();
        // console.log("地图大小",mapSize);
        var bglayer = this.tiledMap.getLayer("bgLayer");
        console.log("背景层",bglayer)

        for (var i=0;i<mapSize.width;i++){
            for (var j=0;j<mapSize.height;j++){
                // console.log(i,j);
                var gid = bglayer.getTileGIDAt(j,i);//获得图块GID
                if (gid != 0){
                     //console.log("gid",gid)
                     var properties = this.tiledMap.getPropertiesForGID(gid);
                     var collisionType = properties['ct'];
                     if (collisionType!= undefined){
                         //console.log("图块碰撞类型" ,collisionType);
                         let pos = bglayer.getPositionAt(j, i);
                         var loadobj = null;
                         switch (collisionType){
                             case 1:
                                 // loadobj.getComponent("Wall").Previous = this.Previous;
                                 if (this.Previous == null) {
                                     loadobj = cc.instantiate(this.wallPrefab);//将预制体克隆到场景
                                     var boxCollider = loadobj.addComponent(cc.BoxCollider);
                                     boxCollider.size.width = 32;
                                     boxCollider.size.height = 32;
                                     this.Previous = loadobj;
                                 }else{
                                     var boxCollider = this.Previous.getComponent(cc.BoxCollider);
                                     boxCollider.offset.x += 16;
                                     boxCollider.size.width += 32;
                                 }
                                 break;
                             case 2:
                                 loadobj =cc.instantiate(this.wallPrefab1);//将预制体克隆到场景
                                 this.Previous = null;
                                 break;
                             case 3:
                                 loadobj =cc.instantiate(this.wallPrefab2);//将预制体克隆到场景
                                 this.Previous = null;
                                 break;
                             case 4:
                                 loadobj =cc.instantiate(this.wallPrefab3);//将预制体克隆到场景
                                 this.Previous = null;
                                 break;
                             case 5:
                                 loadobj =cc.instantiate(this.wallPrefab4);//将预制体克隆到场景
                                 this.Previous = null;
                                 break;
                         }
                         if(loadobj != null){
                             //设置碰撞体位置
                             this.node.addChild(loadobj);//将克隆出的物体作为子物体
                             loadobj.setPosition(cc.v2(pos.x + 16,pos.y + 16));
                         }
                     }
                }else{
                    this.Previous = null;//黑块要重置
                }
            }
            this.Previous = null;//换行后要重置
        }
        var childrens = this.node.children;
        for (var i = 0; i < childrens.length; i++) {
            // if (childrens[i].name == "wallPre") {
                var iBoxCollider = childrens[i].getComponent(cc.BoxCollider);
                if (iBoxCollider!=null){
                    console.log("我是上面的墙",i);
                    for (var j = i + 1; j < childrens.length; j++) {
                        console.log((childrens[i].position.y - childrens[j].position.y));
                        var jBoxCollider = childrens[j].getComponent(cc.BoxCollider);
                        if (jBoxCollider != null && iBoxCollider.size.width == jBoxCollider.size.width && childrens[i].position.x == childrens[j].position.x && (childrens[i].position.y - childrens[j].position.y) % 32 == 0) {
                            iBoxCollider.offset.y -= 16;
                            iBoxCollider.size.height += 32;
                            console.log("我是下面的墙,被清理了",j);
                            // childrens[j].removeComponent(cc.BoxCollider);
                            jBoxCollider.destroy();
                        }
                    }
                }
            // }
        }
        //getSiblingIndex
        //对象层
        let objLayer = this.tiledMap.getObjectGroup('objLayer');
        console.log("对象层",objLayer)
        //获取对象层中的属性
        let player = objLayer.getObject('player');
        this.startPos.x = player.x;
        this.startPos.y = player.y;
        console.log("对象层的角色",player)
        this.Player.getComponent("Player").StartPos = this.startPos;
        this.Player.getComponent("Player").StartRot = player.rotation;
    },

});
