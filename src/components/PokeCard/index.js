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
  },
});

export default function ImgMediaCard({ pokemon }) {
  const classes = useStyles();
  console.log(pokemon);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Pokeball"
          height="140"
          image="/images/pokeball.png"
          title="Pokeball"
        />
        <Divider />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {pokemon.name.english}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            {pokemon.type.map((type)=>{return <Chip size="small" label={type} color="secondary"/>})}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="outlined" size="small" color="secondary" onClick={() => { alert('ready to fight') }}>
          Choose
        </Button>
      </CardActions>
    </Card>
  );
}
