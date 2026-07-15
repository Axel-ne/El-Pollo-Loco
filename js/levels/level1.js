import { Level } from "../models/level.class.js";
import { Chicken } from "../models/chicken.class.js";
import { BackgroundObject } from "../models/background-object.class.js";
import { Cloud } from "../models/cloud.class.js";
import { Endboss } from "../models/endboss.class.js";
import { Coin } from "../models/cion.class.js";
import { Bottle } from "../models/bottle.class.js";
import { SmallChicken } from "../models/smal-chicken.class.js";

export const level1 = new Level(
    [new Chicken(), new Chicken(), new Chicken(),
        new SmallChicken()
    ],


    [new Cloud()],


    [
        new BackgroundObject("img/5_background/layers/air.png", -720),
        new BackgroundObject(
            "img/5_background/layers/3_third_layer/2.png",
            -720,
        ),
        new BackgroundObject(
            "img/5_background/layers/2_second_layer/2.png",
            -720,
        ),
        new BackgroundObject(
            "img/5_background/layers/1_first_layer/2.png",
            -720,
        ),

        new BackgroundObject("img/5_background/layers/air.png", 0),
        new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 0),
        new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 0),
        new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 0),
        new BackgroundObject("img/5_background/layers/air.png", 720),
        new BackgroundObject(
            "img/5_background/layers/3_third_layer/2.png",
            720,
        ),
        new BackgroundObject(
            "img/5_background/layers/2_second_layer/2.png",
            720,
        ),
        new BackgroundObject(
            "img/5_background/layers/1_first_layer/2.png",
            720,
        ),

        new BackgroundObject("img/5_background/layers/air.png", 720 * 2),
        new BackgroundObject(
            "img/5_background/layers/3_third_layer/1.png",
            720 * 2,
        ),
        new BackgroundObject(
            "img/5_background/layers/2_second_layer/1.png",
            720 * 2,
        ),
        new BackgroundObject(
            "img/5_background/layers/1_first_layer/1.png",
            720 * 2,
        ),
        new BackgroundObject("img/5_background/layers/air.png", 720 * 3),
        new BackgroundObject(
            "img/5_background/layers/3_third_layer/2.png",
            720 * 3,
        ),
        new BackgroundObject(
            "img/5_background/layers/2_second_layer/2.png",
            720 * 3,
        ),
        new BackgroundObject(
            "img/5_background/layers/1_first_layer/2.png",
            720 * 3,
        ),
    ],
    [
        new Coin(100 , 330),
        new Coin(200, 330),
        new Coin(300, 330),
        new Coin(400 , 330),
        new Coin(500, 330),
        new Coin(600 , 330),
        new Coin(700 , 330),
    ],
    [
        new Bottle(300, 330),
        new Bottle(600, 330),
        new Bottle(900, 330),
        new Bottle(1200, 330),
        new Bottle(1500, 330)
    ]
);
