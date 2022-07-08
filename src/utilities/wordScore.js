import { sequencePoints } from '../data/sequencePoints.js';
import { excessiveLetterPoints } from '../data/excessiveLetterPoints.js';


function scoreFromSequence(word, sequence) {
    var counter = word.split(sequence.sequence);
    return (counter.length - 1) * sequence.value;
}
function scoreFromRepetition(word, letter) {
    var counter = word.split(letter.letter);
    return ((counter.length - 1) > letter.minNum) ? letter.value : 0;
}

export function wordScore(rawWord) {
    var word = rawWord.toLowerCase();

    var score = 0;
    sequencePoints.forEach((sequence) => (score += scoreFromSequence(word, sequence)));
    excessiveLetterPoints.forEach((letter) => (score += scoreFromRepetition(word, letter)));
    return score;
}
