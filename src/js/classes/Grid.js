import Cell from './Cell';

class Grid {
    constructor(numCols, numRows) {
        this.cols = numCols;
        this.rows = numRows;
        this.cells = [];

        const cellW = (p.width - 1)/this.cols;
        const cellH = (p.height - 1)/this.rows;

        for(let i = 0; i < this.cols; i++) {
            for(let j = 0; j < this.rows; j++) {
                let cell = new Cell(i*cellW, j*cellH, cellW, cellH);
                this.cells.push(cell);
            }
        }
    }

    display() {
        this.cells.forEach(cell => cell.display());
    }
}

export default Grid;