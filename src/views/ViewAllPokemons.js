// ViewAllPokemons
import { useState, useEffect } from "react";
import TransitionsModal from '../components/PokemonDetailed';

// Import api functionality
import Api from "../api/index";

const ViewAllPokemons = () => {
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
        <CenteredGrid pokemons={pokemonList} />
      {/* FIXME: get better solution for limiting/offset/streaming */}
        <ul>
          {pokemonList
            ? pokemonList.slice(0, 10).map((pokemon) => {
            return <li  key={pokemon.id} onClick={() => {
              handleOpenParent();
              setMyPokemon(pokemon)
            }}>
                 {pokemon.name.english}
            </li>
          })
          : null
          }
        </ul>
      </div>
    </>
  );
};

export default ViewAllPokemons;