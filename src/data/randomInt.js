/* Generates a random integer between
   min (inclusive) and max (exclusive) */
export function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
