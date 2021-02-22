import ViewAllPokemons from './ViewAllPokemons';

const ViewSearch = ({
  pokemonList,
  searchInput,
  fightPokemon,
  setFightPokemon,
}) => {
  const searchInputValue = searchInput.toLowerCase()
  const searchRes = pokemonList ?
                pokemonList.filter((pokemon) => {
                  return (
                    pokemon.name.english.toLowerCase().includes(searchInputValue) ||
                    pokemon.id == searchInputValue
                  );
                })
            :
            console.log('pokemonList is empty');

  return (
    <ViewAllPokemons
      pokemonList={searchRes}
      fightPokemon={fightPokemon}
      setFightPokemon={setFightPokemon}
    />
  );
};

export default ViewSearch;
