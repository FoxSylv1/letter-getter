import './HowTo.scss';

function HowTo(props) {
    return (
        <div id="how-to">
            <h2>
                How To Play
            </h2>
            <p class="how-to-text">
                Spell the largest word you can find from the 4x4 grid of tiles.
                Each tile may only be used once, but tiles with the same letters
                can be used however many times the tile appears. Either click or
                type to input letters for submissions. You can submit as many
                times you would like for any given board.
                <br /> <br />
                There is a new daily puzzle every 24 hours. Try to beat your
                friends!
            </p>

            <h2>
                Scoring
            </h2>
            <p class="how-to-text">
                Score is awarded based primarily on the length of the word,
                with more points being given for harder-to-use letters and
                harder-to-use sequences of letters. There is almost always
                at least one 100+ score word in each rack!
                <br />
                (although it may not be easy to find...)
            </p>

            <h2>
                Keyboard Shortcuts
            </h2>
            <p>
                In addition to being able to type in letters, the following
                shortcuts are available to manage the board:
            </p>
            <br />
            <p id="keyboard-shortcuts">
                ENTER: Submit word
                <br />
                CAPS LOCK: Toggles practice mode
                <br />
                CONTROL: Scrambles the board
                <br />
                ESCAPE: Enters a custom board
            </p>
            <br />
            <p class="how-to-text">
                Note that these last two can only be used when in practice
                mode, similarly to normal gameplay.
            </p>
        </div>
    );
}

export default HowTo;
