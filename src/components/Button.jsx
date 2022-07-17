import {useNavigate} from "react-router-dom";

export default function Button(props) {
    let navigate = useNavigate();

    return (
        <div className="button bg-main-blue" onClick={() => {
            navigate(props.goto)
        }}>
            {props.text}
        </div>
    );
}