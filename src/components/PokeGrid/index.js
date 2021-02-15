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
  let [loadCount, setLoadCount] = useState(20);


  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
        direction="row"
        alignItems="center"
        alignContent="flex-start"
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
                    fightPokemon={fightPokemon}  />
              );
            })
          : null}
      </Grid>
      <div class="load-more-btn-container">
        <button class="load-more-btn" onClick={() => setLoadCount(loadCount + 20)}>Load more</button>
      </div>
    </div>
  );
}
