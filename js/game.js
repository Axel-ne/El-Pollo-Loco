import { Character } from "./models/character.class.js";
import { Chicken } from "./models/chicken.class.js";
import { World } from "./models/world.class.js";
import { Keyboard } from "./models/keyboard.class.js";
import { level1 } from "./levels/level1.js";
import { controlsDialogTemplate } from "./template.js";

let canvas;
let world;
let keyboard = new Keyboard();

function startGame() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("canvas").style.display = "block";

    init();
}

function init() {
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard, level1);

    window.world = world;
}

window.addEventListener("load", () => {

    document.getElementById("controls").innerHTML = controlsDialogTemplate();

    document.getElementById("startGame")
        .addEventListener("click", startGame);

    document.getElementById("openControls")
        .addEventListener("click", openControls);

    document.getElementById("closeControls")
        .addEventListener("click", closeControls);

    document.getElementById("fullscreenButton")
        .addEventListener("click", toggleFullscreen);

});

function toggleFullscreen() {

    let game = document.getElementById("startScreen");

    if (!document.fullscreenElement) {
        game.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

function openControls() {
    document.getElementById("controlsDialog").showModal();
}

function closeControls() {
    document.getElementById("controlsDialog").close();
}

window.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
        case 39:
            keyboard.right = true;
            break;
        case 37:
            keyboard.left = true;
            break;
        case 38:
            keyboard.up = true;
            break;
        case 40:
            keyboard.down = true;
            break;
        case 32:
            keyboard.space = true;
            break;
        case 68:
            keyboard.D = true;
            break;
    }
});

window.addEventListener("keyup", (e) => {
    switch (e.keyCode) {
        case 39:
            keyboard.right = false;
            break;
        case 37:
            keyboard.left = false;
            break;
        case 38:
            keyboard.up = false;
            break;
        case 40:
            keyboard.down = false;
            break;
        case 32:
            keyboard.space = false;
            break;
        case 68:
            keyboard.D = false;
            break;
    }
});