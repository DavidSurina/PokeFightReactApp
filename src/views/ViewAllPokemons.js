// ViewAllPokemons
import { useState } from "react";
import TransitionsModal from '../components/PokemonDetailed';
import CenteredGrid from '../components/PokeGrid';


const ViewAllPokemons = ({pokemonList, fightPokemon, setFightPokemon}) => {

  const [myPokemon, setMyPokemon]   = useState()

  const [open, setOpen] =  useState(false);
  const handleOpenParent  = () => { setOpen(true); };
  const handleCloseParent = () => { setOpen(false); };

  const fightSelectionController = (arr, pokemon) => {
   const nArray = [...arr];
    if(arr.length < 2) {
      nArray.push(pokemon);
      setFightPokemon(nArray)
    } else if(arr.length === 2) {
      nArray[1] = pokemon;
      setFightPokemon(nArray);
    }
  }

  return(
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