export const randInt = (min, max) => {
    return Math.floor(min + Math.floor((max-min)*Math.random())); 
}