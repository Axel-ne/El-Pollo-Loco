import { MovableObject } from "./movable-object.class.js";

export class Endboss extends MovableObject {

height = 400;
width = 250;
y = 60;



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

    constructor() {
        super().loadImage(this.imgWalk[0]);
        this.loadImages(this.imgWalk);
        this.x = 2200;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.imgWalk);
        }, 200);
    }
}
