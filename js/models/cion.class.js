import { MovableObject } from "./movable-object.class.js";

export class Coin extends MovableObject {
    y = 370;
    width = 100;
    height = 100;

    offset = {
        top: 20,
        right: 70,
        bottom: 20,
        left: 20,
    };

    coinImg = ["img/8_coin/coin_1.png", "img/8_coin/coin_2.png"];

    constructor() {
        super();
        this.loadImage("img/8_coin/coin_1.png");
        this.loadImage(this.coinImg);
        this.x = x;
        this.y = y;
        this.animate();
    }

    animate(){
        setInterval(() => {
            this.playAnimation(this.coinImg);
        }, 100)
    }
}
