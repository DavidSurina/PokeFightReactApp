import "./style.css";

export default function PokemonFight({fightingPoke}) {
    console.log(fightingPoke)
    if(fightingPoke.length === 2) {
        return (
            <div className="pokefight-wrapper">
                <div className="pokefight-top-wrapper">
                    <div className="pokefight-top-name-wrapper">
                        <h2>{fightingPoke[1].name.english}</h2>
                    </div>
                    <img className="pokefight-top-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${fightingPoke[1].id}.png`}/>
                </div>
                <div className="pokefight-bot-wrapper">
                    <img className="pokefight-bot-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${fightingPoke[0].id}.png`}/>
                    <div className="pokefight-bot-name-wrapper">
                        <h2>{fightingPoke[0].name.english}</h2>
                    </div>
                </div>
            </div>
        );
    } else {
        return (<h1>Sorry select pokemon to fight</h1>)
    } 
}