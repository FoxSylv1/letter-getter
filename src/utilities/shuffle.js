import { mulberry32 } from './mulberry32.js';
import { randomInt } from './randomInt.js';


export function shuffle(seed, list) {
    console.log(list);
    var rng = mulberry32(seed);
    var shuffledList = list.slice();

    for (var i = 0; i < list.length; ++i) {
        var j = randomInt(0, i, rng);
        [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
    }

    return shuffledList;
}
