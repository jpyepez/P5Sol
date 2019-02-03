import p5 from 'p5';
import Grid from './Grid';
import { randInt } from '../utils/base';
import palettes from '../utils/palettes';

// Sketch class
// createSketch returns the sketch function
// props argument allows passing arguments to p5
class Sketch extends p5 {
    constructor(props, parent) {
        super(createSketch(props), parent);
    }
}

export default Sketch;


const createSketch = props => {

    return p => {

        // Expose as GLOBAL
        // use 'p' for sketch functions (setup, draw)
        // use 'p5' for static (p5.Vector, p5.Geometry)
        window.p = p;

        let g;
        const allPalettes = Object.values(palettes);
        const idx = randInt(0, Object.keys(allPalettes).length);
        const palette = allPalettes[idx];
        window.pal = palette;

        p.setup = () => {
            p.createCanvas(1280, 1280);

            let cols = randInt(4, 12) * 2;
            let rows = cols;
            g = new Grid(cols, rows);

            p.noLoop();
        }
        
        p.draw = () => {
            g.display();
        }

        p.mouseReleased = () => {
            p.save(`p5Sol-${randInt(0, 10000)}.jpg`);
        }
    }
}