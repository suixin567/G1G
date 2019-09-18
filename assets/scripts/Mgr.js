var Mgr = cc.Class({
    extends: cc.Component,
    properties: () => ({ //箭头函数在脚本加载中不会同步执行，而是在所有脚本加载成功后才调用。
        player: {
            default: null,
            type: require("Player")
        },
        uiRoot: {
            default: null,
            type: require("UIRoot")
        },
        mapIndex:0
    }),
    start () {
        console.log("MGR初始化",this.player.max_speed);
        console.log("MGR初始化",this.uiRoot.uiName);
    },
    initFromMap(mapDate){
        //设置关卡需要时间
        this.uiRoot.levelTime(mapDate.time);
        console.log("laimap初始化",mapDate);
    },
    levelStart(){
        console.log("Mgr关卡开始了");
        this.uiRoot.levelStart();
    }
});
module.exports = Mgr;