import './BoardManager.scss';

function BoardManager(props) {
    var buttonData = [
        {title: "Backspace", onClick: () => props.undoTile()},
        {title: "Submit", onClick: () => props.submitSubmission()},
        {title: (props.isDaily ? "Practice" : "Daily"), onClick: () => props.switchModes()},
        {title: "Scramble", onClick: () => props.scrambleBoard()},
        {title: "Custom", onClick: () => props.setCustomBoard()}
    ];

    var buttons = buttonData.map((button) => 
        <button class="clickable-button control-button" onClick={() => button.onClick()} key={button.title}>
            <p>
                {button.title}
            </p>
        </button>
    );
    if (props.isDaily) {
        buttons = buttons.slice(0, 3);
    }
    
    return (
        <div id="board-management">
            {buttons}
        </div>
    );
}

export default BoardManager;
