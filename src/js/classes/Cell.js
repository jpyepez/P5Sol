import { randInt } from '../utils/base';

class Cell {
    constructor(x, y, sizeX, sizeY) {
        this.x = x;
        this.y = y;
        this.sizeX = sizeX;
        this.sizeY = sizeY;

    }

    display() {
        p.noFill();
        this.drawOutline();
        this.drawArcs();
    }

    drawOutline() {
        p.noStroke();
        p.fill(pal[pal.length-1]);
        p.rect(this.x, this.y, this.sizeX, this.sizeY);
    }

    drawArcs() {
        p.strokeWeight(4);
        p.stroke(pal[randInt(0, pal.length)]);
        p.push();
        p.translate(this.x + this.sizeX/2, this.y);
        p.arc(0, 0, this.sizeX, this.sizeY, 0, this.getOffset());
        p.pop();

        p.push();
        p.translate(this.x + this.sizeX/2, this.y + this.sizeY);
        p.arc(0, 0, this.sizeX, this.sizeY, p.PI, p.PI + this.getOffset());
        p.pop();

        p.push();
        p.translate(this.x, this.y + this.sizeY/2);
        p.arc(0, 0, this.sizeX, this.sizeY, -p.HALF_PI, -p.HALF_PI+this.getOffset());
        p.pop();

        p.push();
        p.translate(this.x + this.sizeX, this.y + this.sizeY/2);
        p.arc(0, 0, this.sizeX, this.sizeY, p.HALF_PI, p.HALF_PI+this.getOffset());
        p.pop();

    }

    getOffset() {
        return p.HALF_PI*randInt(1, 3);
    }
}

export default Cell;