import Feature from "../components/Feature";
import Button from "../components/Button";

export default function Homepage() {
    return (
        <div className="page-wrapper-centered">
            <h1 style={{margin: 0, fontSize: '80px'}}>Beanix</h1>
            <h2 style={{margin: 0, fontFamily: 'Lato-Thin'}}>Generate your beat just in one click</h2>
            <div style={{display: "flex", flexDirection: "row"}}>
                <Button text={"Watch demo"}/><Button text={"Try for free"} goto="/genre/select"/>
            </div>
            <div className="feature-list">
                <Feature title={"Cheap"} explanation={"Much cheaper than purchasing on beat marketplaces."}/>
                <Feature title={"Exclusive rights"} explanation={"You are not restricted on how exactly you can use your beat."}/>
                <Feature title={"No limits"} explanation={"You can generate as many beats as you want. Pay only for ones that you like."}/>
                <Feature title={"Export"} explanation={"If you have experience working with DAW you can export beat's project and customize it on your own."}/>
            </div>
        </div>
    );
}