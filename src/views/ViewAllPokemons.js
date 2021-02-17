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
     setPokeInfo( `Choose two Pokemons! \nAnd let them fight against one another!` );
  }, []);



  const fightSelectionController = (arr, pokemon) => {
   const nArray = [...arr];
    if(arr.length < 2) {
      nArray.push(pokemon);
      setFightPokemon(nArray)
      setPokeInfo( `Okay, cool! \nYour first Pokemon is: Name_1. \nNow Choose your second Pokemon! ` )
    } else if(arr.length === 2) {
      nArray[1] = pokemon;
      setFightPokemon(nArray);
      setPokeInfo( `Okay now you have choosen both Pokemons. \nThey are ready to fight: \nHit the Fight Button! ` );
    }
      //  console.log('fightPokemon: ',   fightPokemon)
      //  console.log('fightPokemon: ',   fightPokemon ?  fightPokemon[0].name.english : "nix" )
      //  ${fightPokemon[0].name.english ?  fightPokemon[0].name.english : "Name_1" }
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