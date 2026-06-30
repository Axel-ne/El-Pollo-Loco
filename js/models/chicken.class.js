import { MovableObject } from "./movable-object.class.js";

export class Chicken extends MovableObject {
    constructor() {
        super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    }

    moveLeft() {}
}
