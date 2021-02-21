import background_img from '../../img/pokeball.png';

const customStyles = {
  root: {
    maxWidth: 345,
    minWidth: 345,
    margin: '2rem auto',
    border: '4px solid black',
    borderRadius: '2rem',
    backgroundImage: `url(${background_img})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    transform: 'scale(0.9)',
    backgroundSize: 'contain',
    '&:hover': {
      boxShadow: '0 0 5px 3px rgb(129, 129, 129)',
      transform: 'scale(0.95)',
      transition: 'all .3s',
    },
  },
  divider: {
    backgroundColor: '#000',
  },
  img: {
    minHeight: '345px',
    height: '60%',
  },
  name: {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '600',
  },
  type: {
    width: '32%',
    height: '3rem',
    borderRadius: '1rem',
    color: '#fff',
    fontSize: '2rem',
    textAlign: 'center',
  },
  button: {
    justifySelf: 'center',
    border: '3px solid #000',
    borderRadius: '1rem',
    backgroundColor: '#fff',
    color: '#000',
    fontSize: '1.8rem',
    cursor: 'pointer',
    '&:hover': {
      border: '3px solid black',
      color: '#fff',
      backgroundColor: 'red',
      transition: 'all .2s',
    },
  },
  center: {
    justifyContent: 'center',
  },
  // in case we find a solution to get meterialUI classes to work -> ${classes.pokeType}
  Normal: {
    backgroundColor: '#A8A77A',
  },
  Fire: {
    backgroundColor: '#EE8130',
  },
  Water: {
    backgroundColor: '#6390F0',
  },
  Electric: {
    backgroundColor: '#F7D02C',
  },
  Grass: {
    backgroundColor: '#7AC74C',
  },
  Ice: {
    backgroundColor: '#96D9D6',
  },
  Fighting: {
    backgroundColor: '#C22E28',
  },
  Poison: {
    backgroundColor: '#A33EA1',
  },
  Ground: {
    backgroundColor: '#E2BF65',
  },
  Flying: {
    backgroundColor: '#A98FF3',
  },
  Psychic: {
    backgroundColor: '#F95587',
  },
  Bug: {
    backgroundColor: '#A6B91A',
  },
  Rock: {
    backgroundColor: '#B6A136',
  },
  Ghost: {
    backgroundColor: '#735797',
  },
  Dragon: {
    backgroundColor: '#6F35FC',
  },
  Dark: {
    backgroundColor: '#705746',
  },
  Steel: {
    backgroundColor: '#B7B7CE',
  },
  Fairy: {
    backgroundColor: '#D685AD',
  },
};

export default customStyles;
