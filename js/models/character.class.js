import { MovableObject } from "./movable-object.class.js";

export class Character extends MovableObject {
    height = 280;
    y = 80;
    speed = 10;
    imgWalk = [
        "img/2_character_pepe/2_walk/W-21.png",
        "img/2_character_pepe/2_walk/W-22.png",
        "img/2_character_pepe/2_walk/W-23.png",
        "img/2_character_pepe/2_walk/W-24.png",
        "img/2_character_pepe/2_walk/W-25.png",
        "img/2_character_pepe/2_walk/W-26.png",
    ];

imgJump = [];


    world;

    constructor() {
        super().loadImage("img/2_character_pepe/2_walk/W-21.png");

        this.loadImages(this.imgWalk);
        this.applyGravity();
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (
                this.world.keyboard.right &&
                this.x < this.world.level.levelEndX
            ) {
                this.x += this.speed;
                this.otherDirection = false;
            }

            if (this.world.keyboard.left && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.cameraX = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.right || this.world.keyboard.left) {
                let i = this.currentImage % this.imgWalk.length;
                let path = this.imgWalk[i];
                this.img = this.imageChache[path];
                this.currentImage++;
            }
        }, 50);
    }

    jump() {}
}
