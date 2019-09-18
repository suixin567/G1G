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
        uiName:"hello",
        levelTimeLabel :{
            type : cc.Label,
            default:null,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    levelStart(){
        console.log("UI关卡开始了");
    },

    //设置关卡需要时间
    levelTime(time){
        this.levelTimeLabel.string = "限定时间: " + time+ " s";
    },
    // update (dt) {},

    //UI ROOT 脚本应支持 1根据数据创建UI  2开始计时 3暂停
});
