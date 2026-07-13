import { MovableObject } from "./movable-object.class.js";

export class Endboss extends MovableObject {
    height = 400;
    width = 250;
    y = 60;
    health = 100;
    dead = false;
    speed = 2;
    attackDamage = 20;

    imgWalk = [
        "img/4_enemie_boss_chicken/2_alert/G5.png",
        "img/4_enemie_boss_chicken/2_alert/G6.png",
        "img/4_enemie_boss_chicken/2_alert/G7.png",
        "img/4_enemie_boss_chicken/2_alert/G8.png",
        "img/4_enemie_boss_chicken/2_alert/G9.png",
        "img/4_enemie_boss_chicken/2_alert/G10.png",
        "img/4_enemie_boss_chicken/2_alert/G11.png",
        "img/4_enemie_boss_chicken/2_alert/G12.png",
    ];

    imgDie = [
        "img/4_enemie_boss_chicken/5_dead/G24.png",
        "img/4_enemie_boss_chicken/5_dead/G25.png",
        "img/4_enemie_boss_chicken/5_dead/G26.png",
    ];

    constructor() {
        super().loadImage(this.imgWalk[0]);
        this.loadImages(this.imgWalk);
        this.loadImages(this.imgDie);
        this.x = 2200;
        this.animate();
    }

    hit(damage = 20) {
        console.log("Boss getroffen");

        this.health -= damage;

        console.log("Boss HP:", this.health);

        if (this.health <= 0) {
            this.die();
        }
    }

    die() {
        if (this.dead) return;

        clearInterval(this.animationInterval);

        this.playAnimation(this.imgDie);

        setTimeout(() => {
            this.dead = true;
        }, 600);
    }
    animate() {
        this.animationInterval = setInterval(() => {
            if (!this.dead) {
                this.playAnimation(this.imgWalk);
            }
        }, 200);
    }
}
