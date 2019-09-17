var Mgr = cc.Class({
    extends: cc.Component,
    properties: () => ({ //箭头函数在脚本加载中不会同步执行，而是在所有脚本加载成功后才调用。
        player: {
            default: null,
            type: require("Player")
        },
        mapIndex:0
    }),
    start () {
      console.log("dsf",this.player.max_speed);
    },
});
module.exports = Mgr;