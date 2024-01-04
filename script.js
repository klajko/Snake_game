//define basic elements of HTML
const Game_board = document.getElementById("game_board");
const Game_score = document.getElementById("score");
const Game_cooldown_timer = document.getElementById("cooldown_timer");
const Enter = document.getElementById("enter")



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
    if(true)
    {
        const Snake_head = createGameElement('div', 'snake');
        setPosition(Snake_head, snake);
        Game_board.appendChild(Snake_head)
    }
}

function Draw_food(){
    if (true){
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

function Start_game() {
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            Enter.style.display = 'none';
        }
    });
}


function Food_snake_colision(){
}

Start_game() 
let food = Generate_food();
Draw_food();
Draw_snake();