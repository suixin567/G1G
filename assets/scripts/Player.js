var Player = cc.Class({
    extends: cc.Component,

    properties:()=>({
        mgr: {
            default: null,
            type: require("Mgr")
        },
        Player         : cc.Node,
        Button_left    : cc.Node,
        Button_right   : cc.Node,
        Button_go      : cc.Node,
        pauseButton    : cc.Node,
        stopButton     : cc.Node,

        // 速度
        speed          : 0,
        max_speed      : 3,
        StartPos:{
            type: cc.v2,
            set (value) {
                this._StartPos = value;
                console.log("设置初始位置");
                this.node.setPosition(value)
            }
        },
        StartRot:{
            set (value) {
                this._StartRot = value;
                console.log("设置初始角度");
                this.node.angle = value;
            }
        },
    }),

    onLoad () {
        // 目前速度
        this.speed = 0;
        // 主角状态开关
        this.go = false;
        this.run = false;
        this.isLeft = false;
        this.isRight = false;
        //this.node.setPosition(cc.visibleRect.bottomLeft);
        this.pauseButton.active = false;
        this.stopButton.active = false;
    },

    start () {
        // 3个按钮监听
        this.Button_go.on('click',this._go,this);
        this.Button_left.on('touchstart',this._left,this);
        this.Button_right.on('touchstart',this._right,this);
        this.pauseButton.on('click',this._pause,this);
        this.stopButton.on('click',this._stop,this);
        // 松手
        // this.Button_go.on('touchend',this._go_end,this);
        this.Button_left.on('touchend',this._left_end,this);
        this.Button_right.on('touchend',this._right_end,this);
        console.log("不啊",this.mgr.player.max_speed)
    },

    update (dt) {
        if(!this.run){
            return;
        }
        if (this.go) {
            // 加速
            if (this.speed < this.max_speed) {
                this.speed += 3 * dt;
            }
        } else {
            // 松手减速
            if (this.speed > 0) {
                this.speed -= 3 * dt;
            }
            // 不让它减速减到负的
            if (this.speed < 0) {
                this.speed = 0;
            }
        }
        // 左右转向
        if (this.isLeft) {
            this.Player.angle += 100 * dt;
        }
        if (this.isRight) {
            this.Player.angle -= 100 * dt;
        }
        // 主角一直向车头方向走
        let hudu = cc.misc.degreesToRadians(-this.Player.angle);
        this.Player.x += this.speed * Math.sin(hudu);
        this.Player.y += this.speed * Math.cos(hudu);
        // console.log(this.speed);
    },

    _go () {
        this.run = !this.run;
        if (!this.run){
            return;
        }
        this.go = true;
        this.Button_go.active = false;
        this.pauseButton.active = true;
        this.stopButton.active = true;
        },
    // _go_end () {this.isRun = false;},
    _left () {this.isLeft = true;this.isRight=false;},
    _left_end () {this.isLeft = false;},
    _right () {this.isRight = true;this.isLeft=false;},
    _right_end () {this.isRight = false;},

    _pause () {
        this.run = !this.run;
        if (this.run){
            cc.find( 'Background/Label', this.pauseButton).getComponent(cc.Label).string  = "暂停";
        } else{
            cc.find( 'Background/Label', this.pauseButton).getComponent(cc.Label).string  = "恢复";
        }
        },
    _stop () {
        cc.director.loadScene("start");
    },

});
module.exports = Player;