import { useState } from 'react';
import Tile from './Tile';
import './board.scss'

function tileId(name, index) {
    return name.toString() + index.toString();
}

function Board(props) {
    return (
        <div id="board">
            {props.board.map((tileData, index) => 
                <Tile key={tileId(props.name, index)} id={tileId(props.name, index)} value={tileData} />
            )}
        </div>
    );
}

export default Board;
