/* NOTE! If no such conversion from a word into 
tiles on the board exist, then -1 is returned
where a missing tile should be.
It is assumed that only the default tile set is used. */
export function wordToTiles(board, word) {
    //Pre-processing
    var lword = word.toLowerCase();

    //Separate word into assumed tiles
    var tileValues = [];
    for (var c = 0; c < lword.length; ++c) {
        var charAt = lword.charAt(c);
        if (charAt === 'q') {
            if (lword.charAt(c + 1) === 'u') {
                tileValues = tileValues.concat("Qu");
                ++c;
            }
            else {
                tileValues = tileValues.concat("Q");
            }
        }
        else {
            tileValues = tileValues.concat(charAt.toUpperCase());
        }
    }

    //Finding the tiles
    var tiles = [];
    for (var tileValue of tileValues) {
        tiles = tiles.concat(board.findIndex((value, index) => (value === tileValue && !tiles.includes(index))));
    }
    return tiles;
}




export function tilesToWord(board, tiles) {
    var word = "";
    tiles.forEach((tileIndex) => word += board[tileIndex]);
    return word;
}
