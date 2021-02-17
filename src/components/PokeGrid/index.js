import React, { useState } from 'react';
// components
import ImgMediaCard from '../PokeCard';
// materialUI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import "./style.css"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid({ pokemons, handleOpenParent, setMyPokemon, setFightPokemon, fightPokemon}) {
  const classes = useStyles();
  
  //State Variable that increments on LoadMore Button click and loads more pokemon
  let [loadCount, setLoadCount] = useState(20);

  const fightSelectionController = (arr, pokemon) => {
    const nArray = [...arr];
    if(arr.length < 2) {
      nArray.push(pokemon);
      setFightPokemon(nArray)
    } else if(arr.length === 2) {
      nArray[1] = pokemon;
      setFightPokemon(nArray);
    }
  }
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
        direction="row"
        alignItems="center"
        alignContent="center"
        wrap= "wrap"
        xl={12}
        >
        {/*         {restaurants.map((iteration, index) => {
          return <RestaurantCard key={index} restaurant={iteration} />;
        })} */}

      {/* FIXME: get better solution for limiting/offset/streaming */}
        {pokemons
          ? pokemons.slice(0, loadCount).map((pokemon, index) => {
              return (
                  <ImgMediaCard
                    key={index}
                    pokemon={pokemon}
                    handleOpenParent={handleOpenParent}
                    setMyPokemon={setMyPokemon}
                    setFightPokemon={setFightPokemon}
                    fightPokemon={fightPokemon}
                    fightSelectionController={fightSelectionController}  />
              );
            })
          : null}
      </Grid>

      <div className="load-more-btn-container">
        <button className="load-more-btn" onClick={() => setLoadCount(loadCount + 20)}>Load more</button>
      </div>
    </div>
  );
}
