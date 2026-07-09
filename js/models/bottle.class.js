import { MovableObject } from "./movable-object.class.js";

export class Bottle extends MovableObject {
    y = 370;
    width = 100;
    height = 100;

    offset = {
        top: 20,
        right: 70,
        bottom: 20,
        left: 20,
    };

    bottleImg = ["img/6_salsa_bottle/1_salsa_bottle_on_ground.png"];

    constructor(x, y) {
        super();
        this.loadImage(this.bottleImg[0]);
        this.loadImages(this.bottleImg);

        this.x = x;
        this.y = y;

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.bottleImg);
        }, 100);
    }
}

