import { GameObject } from "./GameObject";
import { snake } from "./snake";

export class GameMap extends GameObject {
    constructor(ctx, parent, store) {
        super();

        this.ctx = ctx;
        this.parent = parent;
        this.store = store;
        this.L = 0;

        this.snake = new snake(this.ctx, this);
        this.directions = [];

        this.status = "waiting";
    }

    start() {
       
        this.ctx.canvas.focus();
        
        this.ctx.canvas.addEventListener("keydown", e => {
            if (e.key === 'w' || e.key === 'ArrowUp') {
                this.directions.push(0);
                e.preventDefault();
            } 
            else if (e.key === 'd' || e.key === 'ArrowRight') {
                this.directions.push(1);
                e.preventDefault();
            }
            else if (e.key === 's' || e.key === 'ArrowDown') {
                this.directions.push(2);
                e.preventDefault();
            }
            else if (e.key === 'a' || e.key === 'ArrowLeft') {
                this.directions.push(3);
                e.preventDefault();
            }

            let k = this.directions.length;
            if (k > 1 && this.directions[k - 1] === this.directions[k - 2]) {
                this.directions.pop();
            }

            while (this.directions.length > 2)
                this.directions.splice(0, 1);

            if (this.status === "waiting" && this.directions.length && this.directions[0] !== 3) {
                this.status = "playing";
                this.snake.direction = this.directions[0];
            }
        });
    }

    update_size() {
        this.L = Math.min(this.parent.clientWidth / 17, this.parent.clientHeight / 15);
        this.ctx.canvas.width = this.L * 17;
        this.ctx.canvas.height = this.L * 15;
    }
    
    win() {
        this.snake.color = "white";
        this.status = "win";
        this.store.commit('updateRestart', true);
    }

    lose() {
        this.snake.color = "white";
        this.status = "lose";
        this.store.commit('updateRestart', true);
    }

    restart() {
        this.store.state.score = 0;
        this.status = "waiting";
        this.snake.destroy();
        this.snake = new snake(this.ctx, this);
        this.store.commit('updateRestart', false);
        this.ctx.canvas.focus();
    }
    
    update() {
        this.update_size();
        this.render();
    }

    render() {
        let color_even = "#AAD751", color_odd = "#A2D149";

        for (let i = 0; i < 17; ++i) {
            for (let j = 0; j < 15; ++j) {
                if ((i + j) % 2 == 0) {
                    this.ctx.fillStyle = color_even;
                } else {
                    this.ctx.fillStyle = color_odd;
                }
                this.ctx.fillRect(i * this.L, j * this.L, this.L, this.L);
            }
        }
    }

}