import { MovableObject } from "./movable-object.class.js";

export class Character extends MovableObject {
    height = 280;
    y = 145;
    speed = 10;
    showFrame = true;
    imgWalk = [
        "img/2_character_pepe/2_walk/W-21.png",
        "img/2_character_pepe/2_walk/W-22.png",
        "img/2_character_pepe/2_walk/W-23.png",
        "img/2_character_pepe/2_walk/W-24.png",
        "img/2_character_pepe/2_walk/W-25.png",
        "img/2_character_pepe/2_walk/W-26.png",
    ];

    imgJump = [
        "img/2_character_pepe/3_jump/J-31.png",
        "img/2_character_pepe/3_jump/J-32.png",
        "img/2_character_pepe/3_jump/J-33.png",
        "img/2_character_pepe/3_jump/J-34.png",
        "img/2_character_pepe/3_jump/J-35.png",
        "img/2_character_pepe/3_jump/J-36.png",
        "img/2_character_pepe/3_jump/J-37.png",
        "img/2_character_pepe/3_jump/J-38.png",
        "img/2_character_pepe/3_jump/J-39.png"
    ];

    imgDead = [
        "img/2_character_pepe/5_dead/D-51.png",
        "img/2_character_pepe/5_dead/D-52.png",
        "img/2_character_pepe/5_dead/D-53.png",
        "img/2_character_pepe/5_dead/D-54.png",
        "img/2_character_pepe/5_dead/D-55.png",
        "img/2_character_pepe/5_dead/D-56.png",
        "img/2_character_pepe/5_dead/D-57.png"
    ];

    imgHurt = [
        "img/2_character_pepe/4_hurt/H-41.png",
        "img/2_character_pepe/4_hurt/H-42.png",
        "img/2_character_pepe/4_hurt/H-43.png"
    ];

    world;

    constructor() {
        super().loadImage("img/2_character_pepe/2_walk/W-21.png");

        this.loadImages(this.imgWalk);
        this.loadImages(this.imgJump);
        this.loadImages(this.imgDead);
        this.loadImages(this.imgHurt);
        this.applyGravity();
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (
                this.world.keyboard.right &&
                this.x < this.world.level.levelEndX
            ) {
                this.moveRight();
                this.otherDirection = false;
            }

            if (this.world.keyboard.left && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
            }

            if (this.world.keyboard.space && !this.isAboveGround()) {
                this.jump();
            }

            this.world.cameraX = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.imgDead);
            } else if(this.isHurt()){
                this.playAnimation(this.imgHurt)
            } else if (this.isAboveGround()) {
                this.playAnimation(this.imgJump);
            } else {
                if (this.world.keyboard.right || this.world.keyboard.left) {
                    this.playAnimation(this.imgWalk);
                }
            }
        }, 50);
    }

    jump() {
        this.speedY = 30;
    }
}
