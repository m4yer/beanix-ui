export default function Feature(props) {
    return (
        <div className={"feature-item"}>
            <h3>{props.title}</h3>
            <h4 style={{fontFamily: 'Lato-Thin'}}>{props.explanation}</h4>
        </div>
    );
}