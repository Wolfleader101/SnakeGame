class apple {

    constructor() {
        this.position = new Block(35, 19);

    }

    Draw() {
        this.position.DrawSqaure("red")
    }

    Move() {
        var randCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
        var randRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;

       // while (this.position == snake)
        this.position = new Block(randCol, randRow);
    }
}


