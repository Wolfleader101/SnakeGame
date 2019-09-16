class Block {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }

    DrawSqaure(color) {
        var x = this.col * blockSize;
        var y = this.row * blockSize;
        ctx.fillStyle = color;
        ctx.fillRect(x, y, blockSize, blockSize)
    }

    Equal(otherBlock) {
        return this.col === otherBlock.col && this.row === otherBlock.row;
    }
}