import PokemonFight from '../components/PokemonFight';
import FightSound from '../components/FightSound';

export default function ViewFight({ fightingPoke, fightHistory }) {
  return (
    <>
      <PokemonFight fightingPoke={fightingPoke} fightHistory={fightHistory} />
      <FightSound />
    </>
  );
}
