// ViewAllPokemons
import { useState, useEffect } from 'react';
import TransitionsModal from '../components/PokemonDetailed';
import CenteredGrid from '../components/PokeGrid';

const ViewAllPokemons = ({ pokemonList, fightPokemon, setFightPokemon }) => {
  const [myPokemon, setMyPokemon] = useState();
  const [open, setOpen] = useState(false);
  const [pokeInfo, setPokeInfo] = useState({
    textInfo: ' ',
    chooseOrFight: true,
    firstOrSecondChoice: false,
    buttonShow: true,
  });

  const handleOpenParent = () => {
    setOpen(true);
  };
  const handleCloseParent = () => {
    setOpen(false);
  };

  useEffect(() => {
    setPokeInfo({
      ...pokeInfo,
      textInfo: `Choose two Pokemons and fight!`,
      buttonShow: true,
    });
  }, []);

  const fightSelectionController = (arr, pokemon) => {
    let nArray = [...arr];
    if (arr.length < 1) {
      nArray.push(pokemon);
      setFightPokemon(nArray);
      setPokeInfo({
        ...pokeInfo,
        textInfo: `Now, use the Arrows to choose your second Pokemon. \nIt will fight against: ${nArray[0].name.english}. `,
        buttonShow: false,
        firstOrSecondChoice: true,
      });
    } else if (arr.length === 1) {
      nArray[1] = pokemon;
      setFightPokemon(nArray);

      setPokeInfo({
        ...pokeInfo,
        textInfo: `Okay, ${nArray[0].name.english} will fight against ${nArray[1].name.english}. \nHit the Fight Button! `,
        buttonShow: false,
        chooseOrFight: false,
      });
    } else {
      handleCloseParent();
      // revert values back
      setPokeInfo({
        ...pokeInfo,
        textInfo:
          'Choose two Pokemons! \nYou can let them fight against one another!',
        buttonShow: true,
        firstOrSecondChoice: false,
      });
      // reset (setFightPokemon to empty Array )should only happen if the user really hits the fight button
      setFightPokemon([]);
    }
  };
  return (
    <>
      <TransitionsModal
        handleCloseParent={handleCloseParent}
        open={open}
        currentPokemon={myPokemon}
        setMyPokemon={setMyPokemon}
        pokemonList={pokemonList}
        setFightPokemon={setFightPokemon}
        fightPokemon={fightPokemon}
        fightSelectionController={fightSelectionController}
        pokeInfo={pokeInfo}
        setPokeInfo={setPokeInfo}
      />
      <div className="pokemon-list">
        <CenteredGrid
          pokemons={pokemonList}
          handleOpenParent={handleOpenParent}
          setMyPokemon={setMyPokemon}
          setFightPokemon={setFightPokemon}
          fightPokemon={fightPokemon}
          fightSelectionController={fightSelectionController}
        />
      </div>
    </>
  );
};

export default ViewAllPokemons;
