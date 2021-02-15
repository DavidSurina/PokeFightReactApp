// ViewAllPokemons
import { useState } from "react";
import TransitionsModal from '../components/PokemonDetailed';
import CenteredGrid from '../components/PokeGrid';


const ViewAllPokemons = ({pokemonList, fightPokemon, setFightPokemon}) => {
  
  const [myPokemon, setMyPokemon]   = useState()

  const [open, setOpen] =  useState(false);
  const handleOpenParent  = () => { setOpen(true); };
  const handleCloseParent = () => { setOpen(false); };

  return(
    <>
       <TransitionsModal
            handleCloseParent={handleCloseParent}
            open={open}
            currentPokemon={myPokemon}
            setMyPokemon={setMyPokemon}
            pokemonList={pokemonList}
            />
      <div className="pokemon-list">
        <CenteredGrid
            pokemons={pokemonList}
            handleOpenParent={handleOpenParent}
            setMyPokemon={setMyPokemon}
            setFightPokemon={setFightPokemon}
            fightPokemon={fightPokemon}/>
      </div>
    </>
  );
};

export default ViewAllPokemons;