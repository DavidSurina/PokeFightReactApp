// ViewAllPokemons
import { useState, useEffect} from "react";
import TransitionsModal from '../components/PokemonDetailed';
import CenteredGrid from '../components/PokeGrid';


const ViewAllPokemons = ({pokemonList, fightPokemon, setFightPokemon}) => {

  const [myPokemon, setMyPokemon]   = useState()
  const [pokeInfo, setPokeInfo] = useState('');

  const [open, setOpen] =  useState(false);
  const handleOpenParent  = () => { setOpen(true); };
  const handleCloseParent = () => { setOpen(false); };


  useEffect(() => {
     setPokeInfo( `Choose two Pokemons and... \nlet them fight!` );
  }, []);



  const fightSelectionController = (arr, pokemon) => {

   let nArray = [...arr];
    if(arr.length < 1) {
      nArray.push(pokemon);
      setFightPokemon(nArray)
      setPokeInfo( `Okay, cool! \nYour first Pokemon is: ${nArray[0].name.english}. \nNow Choose your second Pokemon! ` )
    } else if(arr.length === 1) {
      nArray[1] = pokemon;
      setFightPokemon(nArray);
      setPokeInfo( `${nArray[0].name.english} is ready to fight against ${nArray[1].name.english}! \nHit the Fight Button! ` );
    } else  {
      handleCloseParent()
      // revert values back
      setPokeInfo('Choose two Pokemons! \nYou can let them fight against one another!')
      // this should only kick in if the user really hits the fight button
      setFightPokemon([])
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
            pokeInfo={pokeInfo}
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