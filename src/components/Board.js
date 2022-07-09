import Tile from './Tile';
import './Board.scss';


function tileId(name, tileIndex) {
    return name.toString() + tileIndex.toString();
}

function Board(props) {
    return (
        <div id="board">
            {props.board.map((tileData, tileIndex) => 
                <Tile key={tileId(props.name, tileIndex)}
                      id={tileId(props.name, tileIndex)}
                      currentTiles={props.currentTiles}
                      value={tileData}
                      tileIndex={tileIndex}
                      clickTile={() => props.clickTile(tileIndex)} />
            )}
        </div>
    );
}

export default Board;
