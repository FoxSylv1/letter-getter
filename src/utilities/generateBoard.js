import { tileGenerationData } from '../data/tileGenerationData.js';
import { getShuffle } from '../utilities/storageHandlers.js';


const DEFAULT_TILE_COUNT = 16;



/* A seedable pseudo-random number generator. Credit: 
https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript */
function mulberry32(a) {
    return function() {
      var t = (a += 0x6D2B79F5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }
}
function randomInt(min, max, rng) {
    return Math.floor((rng() * (max - min)) + min);
}

function randomSeed() {
    return Math.floor(Math.random() * 4294967296);
}



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


function generateTile(rng) {
    var totalProb = 0;
    tileGenerationData.forEach((tileinfo) => totalProb += tileinfo.probability);
    
    var tileProbCount = randomInt(0, totalProb, rng);
    for (var tileinfo of tileGenerationData) {
        if ((tileProbCount -= tileinfo.probability) < 0) {
            return tileinfo.value;
        }
    }

    return "?"; //Error
}

export function generateBoard(seed = randomSeed()) {
    var board = [];
    var rng = mulberry32(seed);

    //Get legal board
    do {
        for (var i = 0; i < DEFAULT_TILE_COUNT; ++i) { 
            board[i] = generateTile(rng);
        }
    } while (!isLegalBoard(board));

    //Shuffle board (consistently)
    var shuffle = getShuffle();
    for (var j = 0; j < shuffle.length - 1; ++j) {
        [board[j], board[shuffle[j]]] = [board[shuffle[j]], board[j]];
    }

    return board;
}
