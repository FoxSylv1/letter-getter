import { randomInt } from './randomInt.js';


const DEFAULT_TILE_COUNT = 16;

function generateTileData(value, probability, maxNum) {
    return {value: value, probability: probability, maxNum: maxNum};
}
const tileData = [
    generateTileData("A", 950, 4),
    generateTileData("B", 200, 3),
    generateTileData("C", 200, 3),
    generateTileData("D", 400, 4),
    generateTileData("E", 1300, 4),
    generateTileData("F", 250, 3),
    generateTileData("G", 250, 3),
    generateTileData("H", 250, 3),
    generateTileData("I", 750, 4),
    generateTileData("J", 50, 2),
    generateTileData("K", 100, 2),
    generateTileData("L", 450, 4),
    generateTileData("M", 200, 3),
    generateTileData("N", 550, 4),
    generateTileData("O", 650, 4),
    generateTileData("P", 250, 3),
    generateTileData("Qu", 100, 2),
    generateTileData("R", 750, 4),
    generateTileData("S", 600, 4),
    generateTileData("T", 700, 4),
    generateTileData("U", 400, 3),
    generateTileData("V", 200, 3),
    generateTileData("W", 150, 3),
    generateTileData("X", 100, 2),
    generateTileData("Y", 250, 3),
    generateTileData("Z", 50, 2)
];


function isLegalBoard(board) {
    var tileCounts = [];
    tileData.forEach((tileinfo) => tileCounts[tileinfo.value] = 0);
    board.forEach((tile) => ++tileCounts[tile]);
    
    for (var tileinfo of tileData) {
        console.log(tileinfo.value);
        console.log(tileCounts[tileinfo.value]);
        if (tileCounts[tileinfo.value] > tileinfo.maxNum) {
            return false;
        }
    }
    return true;
}

function generateTile() {
    var totalProb = 0;
    tileData.forEach((tileinfo) => totalProb += tileinfo.probability);
    
    var tileProbCount = randomInt(0, totalProb);
    for (var tileinfo of tileData) {
        if ((tileProbCount -= tileinfo.probability) < 0) {
            return tileinfo.value;
        }
    }

    return "?"; //Error
}

export function generateBoard(requiredTiles = [], tileCount = DEFAULT_TILE_COUNT) {
    var board = requiredTiles.slice();

    do {
        for (var i = requiredTiles.length; i < tileCount; ++i) {
            board[i] = generateTile();
        }
    } while (!isLegalBoard(board));

    return board;
}
