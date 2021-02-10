import { useState, useEffect } from "react";

// Import api functionality
import Api from "../api/index";

const ViewAllPokemons = () => {
  const [pokemonList, setPokemonList] = useState();

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
      <div className="pokemon-list">
      {/* FIXME: get better solution for limiting/offset/streaming */}
        <ul>
          {pokemonList
            ? pokemonList.slice(0, 10).map((pokemon) => {
            return <li key={pokemon.id}>
              <a href={`/pokemons/${pokemon.id}`}>
                {pokemon.name.english}
              </a>
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