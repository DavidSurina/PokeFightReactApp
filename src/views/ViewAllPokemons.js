// ViewAllPokemons
import { useState, useEffect } from "react";
import TransitionsModal from '../components/PokemonDetailed';
import CenteredGrid from '../components/PokeGrid';

// Import api functionality
import Api from "../api/index";

const ViewAllPokemons = ({fightPokemon, setFightPokemon}) => {
  const [pokemonList, setPokemonList] = useState()
  const [myPokemon,   setMyPokemon]   = useState()

  const [open, setOpen] =  useState(false);
  const handleOpenParent  = () => { setOpen(true); };
  const handleCloseParent = () => { setOpen(false); };

  useEffect(() => {
    Api.getAllPokemons()
      .then((res)=>{
        setPokemonList(res);
      })
      .catch((err)=>{
        console.error(err)
      })
  },[]);

  return(
    <>
      <h1 class="grid-heading">All Pokemons</h1>
       <TransitionsModal
            handleCloseParent={handleCloseParent}
            open={open}
            currentPokemon={myPokemon} />
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