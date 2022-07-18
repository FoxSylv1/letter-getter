import { tileGenerationData } from '../data/tileGenerationData.js';
import { mulberry32 } from './mulberry32.js';
import { randomInt } from './randomInt.js';
import { randomSeed } from './randomSeed.js';
import { shuffle } from './shuffle.js';
import { getUserUUID } from './storageHandlers.js';


const DEFAULT_TILE_COUNT = 16;
const MAX_GEN_ATTEMPTS = 10;



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

export function generateBoard(args) {
    //For overloading
    var seed = args.seed === undefined ? randomSeed() : args.seed;
    var requiredTiles = args.requiredTiles === undefined ? [] : args.requiredTiles;
    var tileCount = args.tileCount === undefined ? DEFAULT_TILE_COUNT : args.tileCount;


    var board = requiredTiles.slice();
    var rng = mulberry32(seed);

    //Get (hopefully) legal board
    var genAttempts = 0;
    do {
        for (var i = requiredTiles.length; i < tileCount; ++i) { 
            board[i] = generateTile(rng);
        }
    } while (!isLegalBoard(board) && (++genAttempts) < MAX_GEN_ATTEMPTS);

    //Shuffle board
    /* For some reason, the first shuffle on page reload is not calculated correctly.
       This exhausts the bad shuffle. I don't know why this happens, but this fix works. */
    shuffle(getUserUUID(), board);
    return shuffle(getUserUUID(), board);
}
