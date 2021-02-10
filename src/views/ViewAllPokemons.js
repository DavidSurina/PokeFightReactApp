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
        <ul>
        {/* for performance reasons only the first 3 Pokemons are listed */}
          {pokemonList 
            ? <>
              <li key={pokemonList[0].id}>
                  <a href={`/pokemons/${pokemonList[0].id}`}>
                    {pokemonList[0].name.english}
                  </a>
                </li> 
                <li key={pokemonList[1].id}>
                  <a href={`/pokemons/${pokemonList[1].id}`}>
                    {pokemonList[1].name.english}
                  </a>
                </li>
                <li key={pokemonList[2].id}>
                  <a href={`/pokemons/${pokemonList[2].id}`}>
                    {pokemonList[2].name.english}
                  </a>
                </li>
              </>
            : null }

        {/* FIXME: we need data streaming. Browser is  */}
{/*           {pokemonList.map((pokemon) => {
            return <li key={pokemon.id}>
              <a href={`/pokemons/${pokemon.id}`}>
                {pokemon.name.english}
              </a>
            </li>
          })} */}
        </ul>
      </div>
    </>
  );
};

export default ViewAllPokemons;