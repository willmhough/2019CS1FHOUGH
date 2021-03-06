const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

function resizeGame() {
    console.log("resizing");
    var gameArea = document.getElementById('snake');
    var widthToHeight = 1 / 1;
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;
    var newWidthToHeight = newWidth / newHeight;
    
    if (newWidthToHeight > widthToHeight) {
        newWidth = newHeight * widthToHeight;
        gameArea.style.height = newHeight;
        gameArea.style.width = newWidth;
    } 
    
    else {
        newHeight = newWidth / widthToHeight;
        gameArea.style.width = newWidth;
        gameArea.style.height = newHeight;
    }
    
    
    var gameCanvas = document.getElementById('canvas');
    gameCanvas.width = newWidth;
    gameCanvas.height = newHeight;
}

window.addEventListener('resize', resizeGame, false);



// create the unit
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

// create the snake

let snake = [];

snake[0] = {
    x : 3 * box,
    y : 3 * box
};

// create the food

let food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box,
}

const foodImg = document.getElementById("food");

let score = 1;

let d;

document.addEventListener("keydown",direction);

function direction(event){
    let key = event.keyCode;
    if( key == 37 && d != "RIGHT"){
        left.play();
        d = "LEFT";
    }else if(key == 38 && d != "DOWN"){
        d = "UP";
        up.play();
    }else if(key == 39 && d != "LEFT"){
        d = "RIGHT";
        right.play();
    }else if(key == 40 && d != "UP"){
        d = "DOWN";
        down.play();
    }
}


// check collision function
function collision(head,array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}

function draw(){
    for(let i = 0; i < snake.length ; i++){
        ctx.fillStyle = ( i == 0 )? "blue" : "white";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
        
        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }
    
    ctx.drawImage(foodImg, food.x, food.y);
    
    // old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    if( d == "LEFT") snakeX -= box;
    if( d == "UP") snakeY -= box;
    if( d == "RIGHT") snakeX += box;
    if( d == "DOWN") snakeY += box;
    
    // if the snake eats the food
    if(snakeX == food.x && snakeY == food.y){
        score+=5;
        snake.length+=5;
        eat.play();
        food = {
            x : Math.floor(Math.random()*17+1) * box,
            y : Math.floor(Math.random()*15+3) * box
        }
    }else{

        snake.pop();
        console.log("pop");
    }

    let newHead = {
        x : snakeX,
        y : snakeY
    }

    if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17*box || collision(newHead,snake)){
        clearInterval(game);
        death.play();
    }
    
    snake.unshift(newHead);
    
    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText(score,2*box,1.6*box);
}

let game = setInterval(draw,90);