const canvas = document.getElementById('canvas');
const Context = ctx = canvas.getContext('2d');

const height = canvas.height;
const width = canvas.width;

const centerX = width / 2 - (10 / 2);
const centerY = height / 2 - (10 / 2);

const blockSize = 10;
const widthInBlocks = width / blockSize;
const heightInBlocks = height / blockSize;

var score = 0;

var Snake = new snake();
var Apple = new apple();

var IntervalId = setInterval( function () {
    ctx.clearRect(0,0, width, height);
    drawScore();
    Snake.Move();
    Snake.Draw();
    Apple.Draw();
    drawBorder();

}, 100);


