const Game_Object = [];

export class GameObject {
    constructor() {
        Game_Object.push(this);
        this.timedelta = 0;
        this.has_called_start = false;
    }
    start() {

    }

    update() {

    }

    on_destroy() {

    }

    destroy() {
        this.on_destroy();
        for (let i in Game_Object) {
            const obj = Game_Object[i];
            if (obj === this) {
                Game_Object.splice(i, 1);
                break;
            }
        }        
    }
}

let last_timestamp;
const step = timestamp => {
    for (let obj of Game_Object) { //start()执行一次,之后都执行update()
        if (!obj.has_called_start) { //判断start()是否执行
            obj.start();
            obj.has_called_start = true;
        } else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }

    last_timestamp = timestamp;
    requestAnimationFrame(step);//逐级调用
};

requestAnimationFrame(step);