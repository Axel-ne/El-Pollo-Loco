import { MovableObject } from "./movable-object.class.js";
export class Coin extends MovableObject {
    showFrame = true;
    y = 370;
    width = 100;
    height = 100;

    offset = {
        top: 35,
        right: 35,
        bottom: 35,
        left: 35,
    };

    coinImg = ["img/8_coin/coin_1.png", "img/8_coin/coin_2.png"];

    constructor(x, y) {
        super();
        this.loadImage(this.coinImg[0]);
        this.loadImages(this.coinImg);

        this.x = x;
        this.y = y;

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.coinImg);
        }, 100);
    }
}
