export function randomInt(min, max, rng) {
    return Math.floor((rng() * (max - min)) + min);
}
