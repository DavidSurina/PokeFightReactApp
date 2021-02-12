import React from 'react';
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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "2rem auto",
    border: "4px solid black",
    borderRadius: "2rem",
    "&:hover" : {
        boxShadow: "0 0 5px 3px rgb(129, 129, 129)",
        transform: "scale(1.05)",
        transition: "all .3s",
    }
  },
  divider: {
    backgroundColor: "#000",
  },
  img: {
    height: "60%",
  },
  name: {
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: "600",
  },
  type: {
    width: "30%",
    height: "3rem",
    borderRadius: "1rem",
    color: "#fff",
    fontSize: "2rem",
    textAlign: "center"
  },
  button: {
    justifySelf: "center",
    border: "3px solid #000",
    borderRadius: "1rem",
    backgroundColor: "#fff",
    color: "#000",
    fontSize: "1.8rem",
    cursor: "pointer",
    "&:hover" : {
      color: "#fff",
      backgroundColor: "red",
      transition: "all .2s",
    },
  },
  center: {
    justifyContent: "center",
  },
  Fire: {
    backgroundColor: "#ff8800",
  },
  
});

export default function ImgMediaCard({ pokemon }) {
  const classes = useStyles();
  console.log(pokemon);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.img}
          component="img"
          alt="Pokeball"
          height="140"
          image={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
          title="Pokeball"
        />
        <Divider className={classes.divider}/>
        <CardContent>
          <Typography className={classes.name} gutterBottom variant="h5" component="h2">
            {pokemon.name.english}
          </Typography>
          <Typography variant="body2" component="div">
            {pokemon.type.map((pokeType)=>{return <Chip className={`${classes.type} classes.${pokeType}`} size="medium" label={pokeType} />})}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.center}>
        <Button className={classes.button} variant="outlined" size="small" color="secondary" onClick={() => { alert('ready to fight') }}>
          Choose
        </Button>
      </CardActions>
    </Card>
  );
}
