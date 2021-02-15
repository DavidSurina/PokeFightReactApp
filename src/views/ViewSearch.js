// ViewAllPokemons
import { useState } from "react";
import TransitionsModal from '../components/PokemonDetailed';
import CenteredGrid from '../components/PokeGrid';


const ViewSearch = ({pokemonList, searchInput, fightPokemon, setFightPokemon}) => {
  const [myPokemon, setMyPokemon]   = useState()

  const [open, setOpen] =  useState(false);
  const handleOpenParent  = () => { setOpen(true); };
  const handleCloseParent = () => { setOpen(false); };

  const searchRes = pokemonList.filter((pokemon) => {
    return pokemon.name.english.toLowerCase().includes(searchInput);
  })
  return(
    <>
      <h1 className="grid-heading">Search for: {searchInput}</h1>
       <TransitionsModal
            handleCloseParent={handleCloseParent}
            open={open}
            currentPokemon={myPokemon}
            setMyPokemon={setMyPokemon}
            pokemonList={searchRes}
            />
      <div className="pokemon-list">
        <CenteredGrid
            pokemons={searchRes}
            handleOpenParent={handleOpenParent}
            setMyPokemon={setMyPokemon}
            setFightPokemon={setFightPokemon}
            fightPokemon={fightPokemon}/>
      </div>
    </>
  );
};

export default ViewSearch;