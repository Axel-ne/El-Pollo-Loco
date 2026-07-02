import { MovableObject } from "./models/movable-object.class.js";
import { Character } from "./models/character.class.js";
import { Chicken } from "./models/chicken.class.js";
import { World } from "./models/world.class.js";
import { Keyboard } from "./models/keyboard.class.js";

let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById("canvas");

    world = new World(canvas, keyboard);

    window.world = world;
    console.log("my name is", world.character);
    console.log(world.enemies);
}

window.onload = init;

window.addEventListener("keydown", (e) => {
    if(e.keyCode === 39){
        keyboard.right = true;
    }

    console.log(e);

    if(e.keyCode === 37){
        keyboard.left = true;
    }

    if(e.keyCode === 38){
        keyboard.up = true;
    }

    if(e.keyCode === 40){
        keyboard.down = true;
    }

    if(e.keyCode === 32){
        keyboard.space = true;
    }

});

window.addEventListener("keyup", (e) => {
    if(e.keyCode === 39){
        keyboard.right = false;
    }

    console.log(e);

    if(e.keyCode === 37){
        keyboard.left = false;
    }

    if(e.keyCode === 38){
        keyboard.up = false;
    }

    if(e.keyCode === 40){
        keyboard.down = false;
    }

    if(e.keyCode === 32){
        keyboard.space = false;
    }
    
});
