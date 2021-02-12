import React from 'react';
// components
import ImgMediaCard from '../PokeCard';
// materialUI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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

export default function CenteredGrid({ pokemons }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
        direction="row"
        alignItems="center"
        alignContent="flex-start"
        wrap= "wrap"
        xl="20"
        style={{ minHeight: "50vh" }}
        >
        {/*         {restaurants.map((iteration, index) => {
          return <RestaurantCard key={index} restaurant={iteration} />;
        })} */}
        {pokemons
          ? pokemons.slice(0, 20).map((pokemon) => {
              return (
                  <ImgMediaCard pokemon={pokemon} />
              );
            })
          : null}
      </Grid>
    </div>
  );
}