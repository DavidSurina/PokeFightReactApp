import "./style.css";

export default function FightBar () {
    return (
        <section className="fight-bar">
            <div className="fighter-one-wrapper">
                <h3 className="fighter-one-name">Charizard</h3>
                <img className="fighter-one-img" src="https://pokeres.bastionbot.org/images/pokemon/6.png" alt="fighter-one" />
            </div>
            <div className="fight-button-wrapper">
                <p className="vs-sign">VS</p>
                <button className="fight-button">FIGHT!</button>
                <button className="reset-button">reset</button>
            </div>
            <div className="fighter-two-wrapper">
                <h3 className="fighter-two-name">Blastoise</h3>
                <img className="fighter-two-img" src="https://pokeres.bastionbot.org/images/pokemon/9.png" alt="fighter-one" />
            </div>
        </section>
    )
}