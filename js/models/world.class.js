import { Character } from "./character.class.js";
import { Chicken } from "./chicken.class.js";
import { Cloud } from "./cloud.class.js";
import { BackgroundObject } from "./background-object.class.js";
import { Endboss } from "./endboss.class.js";
import { level1 } from "../levels/level1.js";
import { StatusBar } from "./helth-status-bar.class.js";
import { ThrowableObject } from "./throwable-object.class.js";
import { Coin } from "./cion.class.js";
import { Bottle } from "./bottle.class.js";
import { CoinStatusBar } from "./coin-status-bar.class.js";
import { BottleStatusBar } from "./bottle-status-bar.class.js";
import { EndbossStatusbar } from "./endboss-status-bar.class.js";
import { SmallChicken } from "./smal-chicken.class.js";

export class World {
    character = new Character();
    enemies = level1.enemies;
    endboss;
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
    endbossStatusbar = new EndbossStatusbar();

    
    constructor(canvas, keyboard, level) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.level = level;
        this.endboss = new Endboss();
        this.setWorld();
        this.draw();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkChickenCollision();
            this.checkCollision();
            this.checkThrowObjects();

            this.checkBottleHitsChicken();
            this.checkBottleHitsEndboss();
        }, 200);
        setInterval(() => {
            this.checkBottleCollision();
            this.checkCoinCollision();
        }, 1000 / 60);
    }

    checkThrowObjects() {
        if (this.keyboard.D && this.character.bottles > 0) {
            let bottle = new ThrowableObject(
                this.character.x + 100,
                this.character.y + 100,
                this.character.otherDirection,
            );

            this.throwableObjects.push(bottle);

            this.character.bottles--;

            this.bottleStatusBar.setPercentage(this.character.bottles * 20);

            this.keyboard.D = false;
        }
    }

    checkCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColiding(enemy) && enemy.isDead()) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });

        if (this.character.isColiding(this.endboss) && !this.endboss.dead) {
            this.character.hit();

            this.statusBar.setPercentage(this.character.energy);
        }
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

    checkBottleCollision() {
        this.level.bottle.forEach((bottle, index) => {
            if (this.character.isColiding(bottle)) {
                this.character.bottles++;

                this.level.bottle.splice(index, 1);

                this.bottleStatusBar.setPercentage(this.character.bottles * 20);
            }
        });
    }

    checkChickenCollision() {
        this.level.enemies.forEach((enemy, index) => {
            if ((enemy instanceof Chicken || enemy instanceof SmallChicken) && this.character.isColiding(enemy)) {
                if (this.character.y < 145) {
                    this.character.y = 145;
                }
                if (this.character.speedY < 0) {
                    enemy.die();
                    this.character.speedY = 20;
                    setTimeout(() => {
                        this.level.enemies.splice(index, 1);
                    }, 500);
                } else {
                    this.character.hit();
                }
            }
        });
    }

    checkBottleHitsChicken() {
        this.throwableObjects.forEach((bottle, bottleIndex) => {
            this.level.enemies.forEach((enemy, enemyIndex) => {
                if (bottle.isColiding(enemy)) {
                    if (enemy instanceof Chicken && SmallChicken) {
                        enemy.die();

                        this.throwableObjects.splice(bottleIndex, 1);

                        setTimeout(() => {
                            this.level.enemies.splice(enemyIndex, 1);
                        }, 500);
                    }
                }
            });
        });
    }

    checkBottleHitsEndboss() {
        if (!this.endboss) return;

        this.throwableObjects.forEach((bottle, bottleIndex) => {
            if (bottle.isColiding(this.endboss)) {
                this.endboss.hit(20);

                this.endbossStatusbar.setPercentage(this.endboss.health);

                this.throwableObjects.splice(bottleIndex, 1);
            }
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.cameraX, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.endboss);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottle);
        this.ctx.translate(-this.cameraX, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.coinStatusBar);
        this.addToMap(this.bottleStatusBar);
        this.addToMap(this.endbossStatusbar);
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
