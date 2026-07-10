import { MovableObject } from "./movable-object.class.js";

export class Chicken extends MovableObject {
    y = 360;
    height = 60;
    width = 80;
    showFrame = true;
    imgWalk = [
        "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
        "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
        "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
    ];

    constructor() {
        super().loadImage(
            "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
        );
        this.loadImages(this.imgWalk);

        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }

    die() {
    this.loadImage("img/3_enemies_chicken/chicken_normal/2_dead/dead.png");

    setTimeout(() => {
        this.dead = true;
    }, 500);
}

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        setInterval(() => {
            this.playAnimation(this.imgWalk);
        }, 200);
    }
}
