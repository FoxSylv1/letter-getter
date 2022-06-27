import "./tile.scss"

function Tile(props) {
    return (
        <button class="tile">{props.value}</button>
    );
}

export default Tile;
