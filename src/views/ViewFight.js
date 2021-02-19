import PokemonFight from "../components/PokemonFight";
import FightSound from "../components/FightSound";

export default function ViewFight ({fightingPoke}) {

    return (
        <>
            <PokemonFight fightingPoke={fightingPoke} />
            <FightSound />
        </>
    )
}