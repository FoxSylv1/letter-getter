import "./tile.scss"

function Tile(props) {
    return (
        <button class="tile" id={props.id}>{props.value}</button>
    );
}

export default Tile;
