class snake {
    constructor (){

    this.segments = [
        new Block(20, 19),
        new Block(19, 19),
        new Block (18, 19)

    ];

    this.direction = "right";
    this.nextDirection = "right";

    }

    Draw() {
        for (var i = 0; i < this.segments.length; i++) {
            this.segments[i].DrawSqaure("black")
        }
        this.segments[0].DrawSqaure("Blue")
    }

    Move() {
        var head = this.segments[0];
        var newHead;

        this.direction = this.nextDirection;

        if (this.direction === "up") {
            newHead = new Block(head.col, head.row - 1);
        } else if (this.direction === "down") {
            newHead = new Block(head.col, head.row + 1);
        } else if (this.direction === "left") {
            newHead = new Block(head.col - 1, head.row);
        } else if (this.direction === "right") {
            newHead = new Block(head.col + 1, head.row);
        }
        
        if (this.checkCollision(newHead)) {
            gameOver();
            return;
        }

        this.segments.unshift(newHead);


        if (newHead.Equal(Apple.position)) {
            score++;
            Apple.Move();
        } else {
            this.segments.pop();
        }
    }

    checkCollision(head) {
        var leftCollision = (head.col === 0);
        var RightCollision = (head.col === widthInBlocks - 1);
        var topCollision = (head.row === 0);
        var bottomCollision = (head.row === heightInBlocks - 1);

        var wallCollision = leftCollision || topCollision || RightCollision || bottomCollision;

        var selfCollision = false;

        for (var i = 0; i < this.segments.length; i++) {
            if (head.Equal(this.segments[i])) {
                selfCollision = true;
            }
        }

        return wallCollision || selfCollision;
    }

    setDirection(newDirection) {
        if (this.direction === "up" && newDirection === "down") {
            return;
        } else if (this.direction == "down" && newDirection === "up") {
            return;
        }
        else if (this.direction == "left" && newDirection === "right") {
            return;
        }
        else if (this.direction == "right" && newDirection === "left") {
            return;
        }

        this.nextDirection = newDirection;
    }
}



