import Tile from './Tile';
import './board.scss'

function Board(props) {
    return (
        <div id="board">
            {props.board.map((tileData, index) => <Tile key={index} value={tileData} />)}
        </div>
    );
}

export default Board;
