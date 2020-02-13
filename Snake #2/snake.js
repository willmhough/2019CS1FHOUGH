const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

const box = 32;
console.log("box");

let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();
let death = new Audio();

death.src = "death.mp3";
eat.src = "eat.mp3";
up.src = "move.mp3";
right.src = "move.mp3";
left.src = "move.mp3";
down.src = "move.mp3";