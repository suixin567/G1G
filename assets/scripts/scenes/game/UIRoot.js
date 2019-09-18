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
        //几个操作按钮
        startButton   : cc.Node,
        pauseButton    : cc.Node,
        stopButton     : cc.Node,
        //顶部UI
        needTimeLabel :{
            type : cc.Label,
            default:null,
        },
        usedTimeLabel :{
            type : cc.Label,
            default:null,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.pauseButton.active = false;
        this.stopButton.active = false;
        this.startButton.on('click',this._go,this);
        this.pauseButton.on('click',this._pause,this);
        this.stopButton.on('click',this._stop,this);
    },

    start () {

    },

    _go () {
        this.mgr.run = true;
        this.startButton.active = false;
        this.pauseButton.active = true;
        this.stopButton.active = true;
    },

    _pause () {
        this.mgr.run = !this.mgr.run;
        if (this.mgr.run){
            cc.find( 'Background/Label', this.pauseButton).getComponent(cc.Label).string  = "暂停";
        } else{
            cc.find( 'Background/Label', this.pauseButton).getComponent(cc.Label).string  = "恢复";
        }
    },

    _stop () {
        cc.director.loadScene("start");
    },

    //设置关卡需要时间
    levelNeedTime(time){
        this.needTimeLabel.string = "限定时间: " + time+ " s";
    },

    //设置关卡已用时间
    levelUsedTime(time){
        this.usedTimeLabel.string = "已用时间: " + time+ " s";
    },
    // update (dt) {},

    //UI ROOT 脚本应支持 1根据数据创建UI  2开始计时 3暂停
});
