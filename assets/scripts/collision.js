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
    // Get the collision manager.
            let manager = cc.director.getCollisionManager();

    // Enabled the colider manager.
            manager.enabled = true;

    // Enabled draw collider
    //         manager.enabledDebugDraw = true;

    // Enabled draw collider bounding box
    //         manager.enabledDrawBoundingBox = true;

    },

    // update (dt) {},

    onCollisionEnter: function (other, self) {
        this.node.color = cc.Color.RED;
        // this.touchingNumber ++;

        // let world = self.world;
        // let aabb = world.aabb;
        // let preAabb = world.preAabb;
        // let m = world.matrix;

        // for circle collider
        // let r = world.radius;
        // let p = world.position;

        // for box collider and polygon collider
        // let ps = world.points;
    },
});