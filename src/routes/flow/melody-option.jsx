import Button from "../../components/Button";

export default function MelodyOption() {
    return (
        <div className="page-wrapper-centered">
            <h1>Upload or generate melody</h1>
            <div style={{display: "flex", flexDirection: "row"}}>
                <Button text={"Upload file"} goto="/melody/generate"/>
                <Button text={"Auto generate"} goto="/melody/generate"/>
            </div>
        </div>
    );
}