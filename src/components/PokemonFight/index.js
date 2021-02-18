import FightController from "./fight-controller2";

import "./style.css";

export default function PokemonFight({fightingPoke}) {


    console.log(fightingPoke)
    if(fightingPoke.length === 2) {
        return (
            <div className="pokefight-wrapper">
                <div className="pokefight-top-wrapper">
                    <div className="pokefight-top-name-wrapper">
                        <h2 onClick={() => FightController(fightingPoke)}>{fightingPoke[1].name.english}</h2>
                        <p class="pokefight-stats">Hp: {fightingPoke[1].base.HP}</p>
                        <p class="pokefight-stats">Speed: {fightingPoke[1].base.Speed}</p>
                        <p class="pokefight-stats">Attack: {fightingPoke[1].base.Attack}</p>
                        <p class="pokefight-stats">Defense: {fightingPoke[1].base.Defense}</p>
                        <p class="pokefight-stats">Sp.Attack: {fightingPoke[1].base["Sp. Attack"]}</p>
                        <p class="pokefight-stats">Sp.Defense: {fightingPoke[1].base["Sp. Defense"]}</p>
                    </div>
                    <img className="pokefight-top-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${fightingPoke[1].id}.png`}/>
                </div>
                <div className="pokefight-bot-wrapper">
                    <img className="pokefight-bot-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${fightingPoke[0].id}.png`}/>
                    <div className="pokefight-bot-name-wrapper">
                        <h2>{fightingPoke[0].name.english}</h2>
                        <p class="pokefight-stats">Hp: {fightingPoke[0].base.HP}</p>
                        <p class="pokefight-stats">Speed: {fightingPoke[0].base.Speed}</p>
                        <p class="pokefight-stats">Attack: {fightingPoke[0].base.Attack}</p>
                        <p class="pokefight-stats">Defense: {fightingPoke[0].base.Defense}</p>
                        <p class="pokefight-stats">Sp.Attack: {fightingPoke[0].base["Sp. Attack"]}</p>
                        <p class="pokefight-stats">Sp.Defense: {fightingPoke[0].base["Sp. Defense"]}</p>
                    </div>
                </div>
            </div>
        );
    } else {
        return (<h1>Sorry select pokemon to fight</h1>)
    }
}