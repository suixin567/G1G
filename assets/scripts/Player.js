cc.Class({
    extends: cc.Component,

    properties: {
        Player         : cc.Node,
        Button_left    : cc.Node,
        Button_right   : cc.Node,
        Button_go      : cc.Node,
        // 速度
        max_speed      : 50
    },

    onLoad () {
        // 目前速度
        this.speed = 0;
        // 主角状态开关
        this.isRun = false;
        this.isLeft = false;
        this.isRight = false;
    },

    start () {
        // 3个按钮监听
        this.Button_go.on('touchstart',this._go,this);
        this.Button_left.on('touchstart',this._left,this);
        this.Button_right.on('touchstart',this._right,this);
        // 松手
        this.Button_go.on('touchend',this._go_end,this);
        this.Button_left.on('touchend',this._left_end,this);
        this.Button_right.on('touchend',this._right_end,this);
    },

    update (dt) {
        if (this.isRun) {
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
            this.Player.rotation -= 50 * dt;
        }
        if (this.isRight) {
            this.Player.rotation += 50 * dt;
        }
        // 主角一直向车头方向走
        let hudu = cc.misc.degreesToRadians(this.Player.rotation);
        this.Player.x += this.speed * Math.sin(hudu);
        this.Player.y += this.speed * Math.cos(hudu);
        // console.log(hudu);
    },

    _go () {this.isRun = true;},
    _go_end () {this.isRun = false;},
    _left () {this.isLeft = true;},
    _left_end () {this.isLeft = false;},
    _right () {this.isRight = true;},
    _right_end () {this.isRight = false;},

});
