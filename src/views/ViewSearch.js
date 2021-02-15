import ViewAllPokemons from "./ViewAllPokemons";

const ViewSearch = ({pokemonList, searchInput, fightPokemon, setFightPokemon}) => {

  const searchRes = pokemonList.filter((pokemon) => {
    return pokemon.name.english.toLowerCase().includes(searchInput);
  })
  return(
    <ViewAllPokemons pokemonList={searchRes} fightPokemon={fightPokemon} setFightPokemon={setFightPokemon}/>
  );
};

export default ViewSearch;