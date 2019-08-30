cc.Class({
    extends: cc.Component,

    properties: {
        Player  : cc.Node
    },

    update (dt) {
        this.node.x = this.Player.x;
        this.node.y = this.Player.y;
    },
});
