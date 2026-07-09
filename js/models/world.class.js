import { Character } from "./character.class.js";
import { Chicken } from "./chicken.class.js";
import { Cloud } from "./cloud.class.js";
import { BackgroundObject } from "./background-object.class.js";
import { level1 } from "../levels/level1.js";
import { StatusBar } from "./helth-status-bar.class.js";
import { ThrowableObject } from "./throwable-object.class.js";
import { Coin } from "./cion.class.js";
import { Bottle } from "./bottle.class.js";
import { CoinStatusBar } from "./coin-status-bar.class.js";
import { BottleStatusBar } from "./bottle-status-bar.class.js";

export class World {
    character = new Character();
    enemies = level1.enemies;

    clouds = level1.clouds;

    backgroundObjects = level1.backgroundObjects;

    canvas;
    ctx;
    keyboard;
    cameraX = 0;
    statusBar = new StatusBar();
    bottleStatusBar = new BottleStatusBar();
    throwableObjects = [];
    coinStatusBar = new CoinStatusBar();
    constructor(canvas, keyboard, level) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.level = level;
        this.setWorld();
        this.draw();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollision();
            this.checkThrowObjects();
            this.checkCoinCollision();
        }, 200);
    }

    checkThrowObjects() {
        if (this.keyboard.D) {
            let bottle = new ThrowableObject(
                this.character.x + 100,
                this.character.y + 100,
            );

            this.throwableObjects.push(bottle);
            this.keyboard.D = false;
        }
    }

    checkCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColiding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }

    checkCoinCollision() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColiding(coin)) {
                this.character.coins++;

                this.level.coins.splice(index, 1);

                this.coinStatusBar.setPercentage(this.character.coins * 20);
            }
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.cameraX, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.ctx.translate(-this.cameraX, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.coinStatusBar);
        this.addToMap(this.bottleStatusBar);
        this.ctx.translate(this.cameraX, 0);

        this.addToMap(this.character);

        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottle);

        this.ctx.translate(-this.cameraX, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach((o) => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}
