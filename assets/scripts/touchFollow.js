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
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        //绑定触摸事件
        this.node.on(cc.Node.EventType.TOUCH_MOVE,this.mouseFun,this);
    },

    // update (dt) {},
    mouseFun(event){
        console.log('鼠标移动了');
        //触摸点的世界坐标
        var pos=new cc.Vec2(event.getLocationX(),event.getLocationY());
        //转换为UI坐标
        pos=this.node.convertToNodeSpaceAR(pos);
        //给要移动的物体赋值
        this.node.position=pos;
        //只移动x轴,Y轴同理
        //this.weapon.x=pos.x;
    },
});
