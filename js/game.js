import { MovableObject } from "./models/movable-object.class.js";
import { Character } from "./models/character.class.js";
import { Chicken } from "./models/chicken.class.js";

let canvas;
let ctx;
let player = new Character();
let enemies = [new Chicken(), new Chicken(), new Chicken()];

function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    console.log("my name is", player);
    console.log(enemies);
}

window.onload = init;
