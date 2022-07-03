import Tile from './Tile';
import './Board.scss'


function tileId(name, index) {
    return name.toString() + index.toString();
}

function Board(props) {
    return (
        <div id="board">
            {props.board.map((tileData, index) => 
                <Tile key={tileId(props.name, index)}
                      id={tileId(props.name, index)}
                      value={tileData}
                      tileUsed={props.isTileUsed[index]}
                      submitTile={() => props.submitTile(tileData, index)} />
            )}
        </div>
    );
}

export default Board;
