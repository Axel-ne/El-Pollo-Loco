import { MovableObject } from "./movable-object.class.js";

export class Character extends MovableObject {
    height = 280;
    y = 155;
    imgWalk = [
        "img/2_character_pepe/2_walk/W-21.png",
        "img/2_character_pepe/2_walk/W-22.png",
        "img/2_character_pepe/2_walk/W-23.png",
        "img/2_character_pepe/2_walk/W-24.png",
        "img/2_character_pepe/2_walk/W-25.png",
        "img/2_character_pepe/2_walk/W-26.png",
    ];
    

    constructor() {
        super().loadImage("img/2_character_pepe/2_walk/W-21.png");

        this.loadImages(this.imgWalk);

        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.imgWalk.length;
            let path = this.imgWalk[i];
            this.img = this.imageChache[path];
            this.currentImage++;
        }, 100);
    }

    jump() {}
}
