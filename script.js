//define basic elements of HTML
const Game_board = document.getElementById("game_board");
const Game_score = document.getElementById("score");
const Enter = document.getElementById("enter")
const Game_over = document.getElementById("over")
const sound = document.getElementById("myAudio"); 
const reset = document.getElementById("reset"); 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
//define variables of game
const gridSize = 20;
let delay = 200;
let snake = [{ x: 10, y: 10 }];
let gamestarted = false;
let gameover = false;
let direction;
let apples = 0;
let score = 0;

//drawing all things
function Draw(){
    Game_board.innerHTML = '';
    Draw_snake()
    Game_score.innerHTML= score;
}
//calculates location of head
function Move_snake(){
    const head = {...snake[0]};
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
	
}

function Draw_snake() {
    if(true) {
        snake.forEach((snake) => {
        const Snake_head = createGameElement('div', 'snake');
        setPosition(Snake_head, snake);
        Game_board.appendChild(Snake_head)
    });
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

function Generate_food() {
    let newFood;
    do {
        const x = Math.floor(Math.random() * gridSize) + 1;
        const y = Math.floor(Math.random() * gridSize) + 1;
        newFood = { x, y };
    } while (isFoodOnSnake(newFood));

    return newFood;
}

function isFoodOnSnake(food) {
    return snake.some((segment) => segment.x === food.x && segment.y === food.y);
}

//check for wall colison
function Wall_snake_colision(){
    const head = snake[0];
if(head.x < 1 || head.x > gridSize || head.y < 1 || head.y > gridSize){
Game_board.innerHTML = '';
Game_over.style.visibility = 'visible';
game_over.play();
gamestarted= false;
gameover= true;
return gameover;
}
}

function snake_snake_colision() {
    const head = snake[0];
    if(snake.length > 1){
    for (let z = 3; z < snake.length; z++) {
        if (head.x === snake[z].x && head.y === snake[z].y) {
            Game_board.innerHTML = '';
            Game_over.style.visibility = 'visible';
            game_over.play();
            gamestarted = false;
            gameover = true;
            return gameover;
        }
    }
}
}

function Apple_snake_colision() {
    const head = snake[0];
    if (head.x === food.x && head.y === food.y) {
        food = Generate_food();
        score++;
        sound.play();

        if (score % 5 === 0 && delay > 100) {
            delay -= 5;

            // Clear the existing interval
            clearInterval(gameInterval);

            // Set up a new interval with the updated delay
            gameInterval = setInterval(gameLoop, delay);
        }

        console.log(score);
        console.log(delay);
    } else {
        snake.pop();
    }
}

function start(){
    Enter.style.display = 'none';
    Draw_snake();
    gamestarted = true;  
}

if(!gameover)
{
    window.addEventListener('keydown', keypress);
    Game_over.style.visibility = 'hidden';
}

// Add a game loop
function gameLoop() {
    if (gamestarted) {
        Move_snake();
        Wall_snake_colision();
        Apple_snake_colision();
        snake_snake_colision(); 
        if(!gameover){
        Draw();
        Draw_food();
        }
    }
}

// Set up the game loop with a specified delay
let gameInterval = setInterval(gameLoop, delay);

// Modify the keypress event listener
function keypress(event) {
    if (!gamestarted && event.key === 'Enter') {
        start();
        gamestarted = true;
    }

    // Change direction immediately
    {
    switch (event.key) {
        case 'ArrowUp':
            if (direction !== 'down' && snake.length !== 1) {
                direction = 'up';
            }
            else if(snake.length === 1){
                direction = 'up';
            }
            break;
        case 'ArrowDown':
            if (direction !== 'up'&& snake.length !== 1) {
                direction = 'down';
            }
            else if(snake.length === 1){
                direction = 'down';
            }
            break;
        case 'ArrowLeft':
            if (direction !== 'right'&& snake.length !== 1) {
                direction = 'left';
            }
            else if(snake.length === 1){
                direction = 'left';
            }
            break;
        case 'ArrowRight':
            if (direction !== 'left'&& snake.length !== 1) {
                direction = 'right';
            }
            else if(snake.length === 1){
                direction = 'right';
            }
            break;
        }
    
    }
    if(gamestarted && apples === 0) {
        food = Generate_food();
        apples++;
    }
}


