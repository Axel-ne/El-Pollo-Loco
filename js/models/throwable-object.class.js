import { MovableObject } from "./movable-object.class.js";

export class ThrowableObject extends MovableObject {
    constructor(x, y) {
        super();
        this.loadImage("img/6_salsa_bottle/salsa_bottle.png");
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 60;
        this.groundY = 360;
        this.throw();
    }

    throw() {
    this.speedY = 30;
    this.applyGravity();

    this.throwInterval = setInterval(() => {

        if (this.y >= this.groundY) {
            this.y = this.groundY;
            clearInterval(this.throwInterval);
            return;
        }


        if (this.otherDirection) {
            this.x -= 10;
        } else {
            this.x += 10;
        }

    }, 1000 / 25);
}
}
