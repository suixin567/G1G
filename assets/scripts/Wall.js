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
        Previous:{
            type: cc.Node,
            set (value) {
                this._Previous = value;
                //console.log("我是墙块",this._Previous);

                // if (this._Previous == null){
                //         var boxCollider = this.addComponent(cc.BoxCollider);
                //         boxCollider.size.width = 32;
                //         boxCollider.size.height = 32;
                // }else{
                //      var boxCollider = this._Previous.getComponent(cc.BoxCollider);
                //      if (boxCollider!=null){
                //          boxCollider.offset.x += 16;
                //          boxCollider.size.width += 32;
                //      }
                //
                // }



                // var boxCollider = this._Previous.getComponent(cc.BoxCollider);
                // if (boxCollider!=null){//上一块已经有了碰撞体
                //
                //
                //         console.log("上一个墙块已经有了碰撞体",boxCollider.node.name);
                //         //让上一个碰撞体变大
                //         // boxCollider.offset.x += 16;
                //         // boxCollider.size.width += 32;
                //
                // }else{
                //     console.log("woshidiyige");
                //     //     var boxCollider = this.addComponent(cc.BoxCollider);
                //     // boxCollider.offset.x = 0;
                //     // boxCollider.offset.y = 0;
                //     //     boxCollider.size.width = 32;
                //     //     boxCollider.size.height = 32;
                // }
            }
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

        // if(this.Previous == null){
        //     var boxCollider = this.addComponent(cc.BoxCollider);
        //     boxCollider.size.width = 32;
        //     boxCollider.size.height = 32;
        //     console.log("start",this.node.position);
        //     return;
        // }
        // var boxCollider = this.Previous.getComponent(cc.BoxCollider);
        // if (boxCollider==null){//上一块已经有了碰撞体
        //     var boxCollider = this.addComponent(cc.BoxCollider);
        //     boxCollider.size.width = 32;
        //     boxCollider.size.height = 32;
        // }
    },

    // update (dt) {},
});
