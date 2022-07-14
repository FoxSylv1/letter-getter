import './Title.scss';

function Title(props) {
    return (
        <div id="full-title">
            <h1 id="title">
                {props.children}
            </h1>
            <h4 id="subtitle">
                {props.isDaily ? "" : "(Practice)"}
            </h4>
        </div>
    );
}

export default Title;
