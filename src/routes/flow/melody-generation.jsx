import Button from "../../components/Button";
import GeneratedMelody from "../../components/GeneratedMelody";

export default function MelodyGeneration() {
    return (
        <div className="page-wrapper-centered">
            <h1>Generate custom melody here</h1>
            <GeneratedMelody/>
            <div style={{display: "flex", flexDirection: "row"}}>
                <Button text={"Generate"}/>
                <Button text={"Use this"}/>
            </div>
        </div>
    );
}