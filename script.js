//define basic elements of HTML
const Game_board = document.getElementById("game_board");
const Game_score = document.getElementById("score");
const Game_cooldown_timer = document.getElementById("cooldown_timer");
const Enter = document.getElementById("enter")

//define variables of game
const gridSize = 20;
let delay = 400;
let snake = [{ x: 10, y: 10 }];
let food = generateFood();

//draws each segment of snake
function Draw_snake() {
  snake.forEach((snake) => {
    const snakeElement = createGameElement('div', 'snake');
    setPosition(snakeElement, snake);
    board.appendChild(snakeElement);
  });
}

//set position of game element
function setPosition(element, position) {
  element.style.gridColumn = position.x;
  element.style.gridRow = position.y;
}

//creates **div** individual game element
function createGameElement(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

//generates position of food
function Generate_food(){
  const x = Math.floor(Math.random() * gridSize) + 1;
  const y = Math.floor(Math.random() * gridSize) + 1;
  return { x, y };
}
//draws food
  function Draw_food() {
  const Food_element = createGameElement('div', 'apple');
  setPosition(Food_element, food);
  Game_board.appendChild(Food_element);
    }


