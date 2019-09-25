cc.Class({
    extends: cc.Component,

    properties: {
        mgr: {
            default: null,
            type: require("Mgr")
        },
        // _sprite: {
        //     default: null,
        //     type: cc.Sprite
        // },
    },

    onLoad () {
        // this.sprite = this.getComponent(cc.Sprite);
        // this.sprite.color =  背景颜色
        this.mgr = cc.find("mgr").getComponent("Mgr");;
        this.node.opacity = 0;
    },

    // update (dt) {},

    onCollisionEnter: function (other, self) {
        // this.node.color = cc.Color.RED;
        console.log("道具",other.name);
        if (other.node.name.startsWith("player")){
            this.node.opacity = 255;
            this.mgr.heart();
        }

    },
});
