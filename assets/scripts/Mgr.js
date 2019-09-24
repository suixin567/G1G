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
        mapIndex:0,
        needTime:0,//当前关卡限定时间
        usedTime:0,//当前关卡已用时间
        run:false,
        needHeart:0,//需要红心
        collectedHeart:0,//已收集红心
    }),

    start () {
        console.log("MGR初始化", this.player.max_speed);
        console.log("MGR初始化", this.uiRoot.uiName);
        //计时器
        this.schedule(function () {
            if (this.run) {
                this.usedTime += 1;
                this.uiRoot.levelUsedTime(this.usedTime);
                if (this.usedTime >= this.needTime){
                    this.run = false;
                    console.log("时间到了");
                }
            }
        }, 1);
    },

    initFromMap(mapDate){
        //设置关卡需要时间
        this.run=false;
        this.needTime = mapDate.time;
        this.usedTime = 0;
        this.uiRoot.levelNeedTime(this.needTime);
        this.uiRoot.levelUsedTime(0);

        this.needHeart = mapDate.heart;
        this.collectedHeart = 0;
        this.uiRoot.levelNeedHeart(this.needHeart);
        this.uiRoot.levelCollectedHeart(0);
    },
    finish(){
      if(this.collectedHeart<this.needHeart){
          reStart();
      }  else{
          //切换场景
          this.mapIndex ++;
          var map = cc.find("Canvas/map");
          map.getComponent("Map").nextMap(this.mapIndex);
      }
    },
    //碰墙后重新开始
    reStart(){
        this.usedTime = 0;
        this.uiRoot.levelUsedTime(0);
        this.collectedHeart = 0;
        this.uiRoot.levelCollectedHeart(0);
    },
    //吃到红心
    heart(){
        this.collectedHeart++;
        this.uiRoot.levelCollectedHeart(this.collectedHeart);
    },
});
module.exports = Mgr;