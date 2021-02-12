// ViewAllPokemons
import { useState, useEffect } from "react";

// Import Components
import TransitionsModal from '../components/PokemonDetailed';
import CenteredGrid from '../components/PokeGrid';

// Import api functionality
import Api from "../api/index";

const ViewAllPokemons = () => {
  const [pokemonList, setPokemonList] = useState()
  const [myPokemon,   setMyPokemon]   = useState()
  const [openModal,   setopenModal]   = useState()
  const toggleModalLayer = () => { setopenModal(!openModal) }

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
      <h1>All Pokemons</h1>
        <TransitionsModal  openModal={toggleModalLayer}  currentPokemon={myPokemon} />
      <div className="pokemon-list">
        <CenteredGrid pokemons={pokemonList} />
      {/* FIXME: get better solution for limiting/offset/streaming */}
        <ul>
          {pokemonList
            ? pokemonList.slice(0, 10).map((pokemon) => {
            return <li  key={pokemon.id} onClick={() => {toggleModalLayer(); setMyPokemon(pokemon)}}>
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