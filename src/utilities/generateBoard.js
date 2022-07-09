import { tileGenerationData } from '../data/tileGenerationData.js';
import { randomInt } from './randomInt.js';


const DEFAULT_TILE_COUNT = 16;


function isLegalBoard(board) {
    //Check count of each tile
    var tileCounts = [];
    tileGenerationData.forEach((tileinfo) => tileCounts[tileinfo.value] = 0);
    board.forEach((tile) => ++tileCounts[tile]);
    for (var tileinfo of tileGenerationData) {
        if (tileCounts[tileinfo.value] > tileinfo.maxNum) {
            return false;
        }
    }

    return true;
}

function generateTile() {
    var totalProb = 0;
    tileGenerationData.forEach((tileinfo) => totalProb += tileinfo.probability);
    
    var tileProbCount = randomInt(0, totalProb);
    for (var tileinfo of tileGenerationData) {
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
