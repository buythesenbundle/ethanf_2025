import GameEnv from './GameEnv.js';

class Railgun {
    constructor(player) {
        this.player = player;
        this.bullets = [];
    }

    shoot() {
        const currentTime = Date.now();

        this.lastShotTime = currentTime; // Update the last shot time

        const bullet = {
            x: this.player.position.x + this.player.width / 2,
            y: this.player.position.y + this.player.height / 2,
            velocity: {
                x: Math.cos(this.player.angle) * 10,
                y: Math.sin(this.player.angle) * 10
            }
        };
        this.bullets.push(bullet);
    }

    update() {
        this.bullets.forEach((bullet, index) => {
            bullet.x += bullet.velocity.x;
            bullet.y += bullet.velocity.y;

            // Remove bullets that are out of bounds
            if (
                bullet.x < 0 || bullet.x > GameEnv.innerWidth ||
                bullet.y < 0 || bullet.y > GameEnv.innerHeight
            ) {
                this.bullets.splice(index, 1);
            }
        });
    }

    draw() {
        this.bullets.forEach(bullet => {
            GameEnv.ctx.beginPath();
            GameEnv.ctx.arc(bullet.x, bullet.y, 5, 0, Math.PI * 2);
            GameEnv.ctx.fillStyle = 'yellow';
            GameEnv.ctx.fill();
            GameEnv.ctx.closePath();
        });
    }
}

export default Railgun;

// :3