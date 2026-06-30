import { MovableObject } from "./models/movable-object.class.js";
import { Character } from "./models/character.class.js";
import { Chicken } from "./models/chicken.class.js";
import { World } from "./models/world.class.js";

let canvas;
let world;
// let ctx;

function init() {
    canvas = document.getElementById("canvas");

    world = new World(canvas);

    window.world = world; 
    console.log("my name is", world.character);
    console.log(world.enemies);
}

window.onload = init;
