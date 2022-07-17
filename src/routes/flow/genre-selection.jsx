import Button from "../../components/Button";

export default function GenreSelection() {
    return (
        <div className="page-wrapper-centered">
            <h1>Select desired genre for your beat</h1>
            <div style={{display: "flex", flexDirection: "row"}}>
                <select>
                    <option value="trap">Trap</option>
                    <option value="pop">Pop</option>
                    <option value="rock">Rock</option>
                </select>
                <Button text={"Next"} goto="/melody/option"/>
            </div>
        </div>
    );
}