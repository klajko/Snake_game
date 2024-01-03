//define basic elements of HTML
const Game_board = document.getElementById("game_board");
const Game_score = document.getElementById("score");
const Game_cooldown_timer = document.getElementById("cooldown_timer");

//define variables of game
const gridSize = 20;
let delay = 400;
let snake = [{ x: 10, y: 10 }];
createGameElement('div', 'snake');

//drawing all things
function Draw(){
    Game_board.innerHTML = '';
    Draw_snake()
}

function Move_snake(){
}

function Draw_snake(){
}

function Draw_food(){
    if (true){
        const Food_element = createGameElement('div', 'apple');
        setPosition(Food_element, food);
        Game_board.appendChild(Food_element);
    }
}

function Generate_food(){
    const x = Math.floor(Math.random() * gridSize) + 1;
    const y = Math.floor(Math.random() * gridSize) + 1;
    return { x, y };
}

function Food_snake_colision(){
}
