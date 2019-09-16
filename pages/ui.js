var drawBorder = function () {
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, width, blockSize);
    ctx.fillRect(0, height - blockSize, width, blockSize);
    ctx.fillRect(0, 0, blockSize, height);
    ctx.fillRect(width - blockSize, 0, blockSize, height);

}


var drawScore = function () {
    ctx.font = "20px Courier";
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText(`Score: ${score}`, blockSize, blockSize);
}


var gameOver = function () {
    clearInterval(IntervalId);
    ctx.font = " bold 60px Courier";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Game Over!", width / 2, height / 2)
}
