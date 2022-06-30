import { useState } from 'react';
import Tile from './Tile';
import './Board.scss'


function tileId(name, index) {
    return name.toString() + index.toString();
}

function handleTileSubmit(index, currentIsTileUsed, setIsTileUsed) {
    var newIsTileUsed = currentIsTileUsed.slice();
    newIsTileUsed[index] = true;
    setIsTileUsed(newIsTileUsed);
}

function Board(props) {
    var [board, setBoard] = useState(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"]);
    var [isTileUsed, setIsTileUsed] = useState((new Array(board.length).fill(false)));

    return (
        <div id="board">
            {board.map((tileData, index) => 
                <Tile key={tileId(props.name, index)}
                      id={tileId(props.name, index)}
                      value={tileData}
                      tileUsed={isTileUsed[index]}
                      submitTile={() => handleTileSubmit(index, isTileUsed, setIsTileUsed)} />
            )}
        </div>
    );
}

export default Board;
