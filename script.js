//define basic elements of HTML
const Game_board = document.getElementById("game_board");
const Game_score = document.getElementById("score");
const Game_cooldown_timer = document.getElementById("cooldown_timer");
const Enter = document.getElementById("enter")

//define variables of game
const gridSize = 20;
let delay = 100;
let snake = [{ x: 10, y: 10 }];
let gamestarted = false;
let direction;
let apples = 0;

//drawing all things
function Draw(){
    Game_board.innerHTML = '';
    Draw_snake()
}

function Move_snake(){
    const head = { ...snake[0] };
    switch (direction) {
        case 'up':
        	head.y--;
          	break;
        case 'down':
          	head.y++;
          	break;
        case 'left':
          	head.x--;
          	break;
        case 'right':
          	head.x++;
          	break;  
	}
	snake.unshift(head);
	snake.pop();
}

function Draw_snake() {
    if(true) {
        const Snake_head = createGameElement('div', 'snake');
        setPosition(Snake_head, snake[0]);
        Game_board.appendChild(Snake_head)
    }
}

function Draw_food() {
    if (true) {
        const Food_element = createGameElement('div', 'apple');
        setPosition(Food_element, food);
        Game_board.appendChild(Food_element);
    }
}

function setPosition(element, position) {
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}

function createGameElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

function Generate_food(){
    const x = Math.floor(Math.random() * gridSize) + 1;
    const y = Math.floor(Math.random() * gridSize) + 1;
    return { x, y };
}

function Food_snake_colision(){
}

function start(){
    Enter.style.display = 'none';
    Draw_snake();
    gamestarted = true;  
}

//toto doriesit JABLKA
    while(gamestarted && apples === 0 ) {
        food = Generate_food();
        Draw_food();
        apples++;
    }
//toto doriest JABLKA





window.addEventListener('keydown', keypress);

// ... (Your existing code)

// Add a game loop
function gameLoop() {
    if (gamestarted) {
        Move_snake();
        Draw();
    }
}

// Set up the game loop with a specified delay
const gameInterval = setInterval(gameLoop, delay);

// Modify the keypress event listener
function keypress(event) {
    if (!gamestarted && event.key === 'Enter') {
        start();
        gamestarted = true;
    }

    // Change direction immediately
    switch (event.key) {
        case 'ArrowUp':
            direction = 'up';
            break;
        case 'ArrowDown':
            direction = 'down';
            break;
        case 'ArrowLeft':
            direction = 'left';
            break;
        case 'ArrowRight':
            direction = 'right';
            break;
    }
}
