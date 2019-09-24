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
        mgr: {
            default: null,
            type: require("Mgr")
        },
        _player: {
            default: null,
            type: require("Player")
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.player = this.getComponent('Player');
    },

    start () {
    // Get the collision manager.
            let manager = cc.director.getCollisionManager();

    // Enabled the colider manager.
            manager.enabled = true;

    // Enabled draw collider
            manager.enabledDebugDraw = true;

    // Enabled draw collider bounding box
    //         manager.enabledDrawBoundingBox = true;
    },

    // update (dt) {},

    onCollisionEnter: function (other, self) {
        // this.node.color = cc.Color.RED;
        console.log(other.name);
        if (other.node.name.startsWith("wall")){
            this.node.setPosition(this.player._StartPos);
            this.node.angle = this.player._StartRot;
            this.mgr.reStart();
        }
        else if(other.name.startsWith("finish")){
            this.player.speed = 0;
            this.mgr.finish();
        }
        else if(other.name.startsWith("heart")){
            this.mgr.heart();
            other.node.active = false;
            console.log(other.node)
        }
    },
});
