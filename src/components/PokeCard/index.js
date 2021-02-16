import React, {useState} from 'react';
// materialUI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
//pokeball png
import PokeballPng from '../../img/pokeball.png';
// styles
import customStyles from "./materialStyle.css.js";

import axios from "axios";

const useStyles = makeStyles(customStyles);

export default function ImgMediaCard({ pokemon,  handleOpenParent, setMyPokemon, setFightPokemon, fightPokemon }) {
  //state variable created to determine if the picture is loaded
  const [loaded, setLoaded] = useState(false);
  //url sting for img call
  const urlStr = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`;

  const classes = useStyles();

  //async call to api for img
  const getImage = async () => {
    try{
      const response = await axios.get(urlStr)
      if (response.data) {
        setLoaded(true)}
      } catch (err){
        console.error(err)
      }
  }
  getImage();

  const fightPokemonSelection = (arr) => {
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
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.img}
          component="img"
          alt="Pokeball"
          height="140"
          image={loaded === true ? urlStr : PokeballPng}
          title="Pokeball"
          onClick={() => {
              handleOpenParent();
              setMyPokemon(pokemon)
            }}
        />
        <Divider className={classes.divider}/>n
        <CardContent>
          <Typography className={classes.name} gutterBottom variant="h5" component="h2">
            {pokemon.name.english}
          </Typography>
          <Typography variant="body2" component="div" className="type-wrapper" align="center">
            {pokemon.type.map((pokeType, index)=>{
              return (<Chip key={index} className={`${classes.type} ${classes[pokeType]}`} size="medium" label={pokeType} />)})}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.center}>
        <Button className={classes.button} variant="outlined" size="small" color="secondary" onClick={() => {
          fightPokemonSelection(fightPokemon)}}>
          Choose
        </Button>
      </CardActions>
    </Card>
  );
}