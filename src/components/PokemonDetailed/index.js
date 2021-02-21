// MODAL COMPONENT
// import axios from "axios";
import Api from '../../api';

// https://material-ui.com/components/modal/#transitions
import React, { useState, useEffect } from 'react';
import { Modal, makeStyles, Backdrop, Fade } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import customStyles from '../PokeCard/materialStyle.css.js';

import './detailed.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const TransitionsModal = ({
  handleCloseParent,
  open,
  currentPokemon,
  setMyPokemon,
  pokemonList,
  setFightPokemon,
  fightPokemon,
  fightSelectionController,
  pokeInfo,
  setPokeInfo,
}) => {
  const [pokemonDetails, setPokemonDetails] = useState();
  const [pokemonDescription, setPokemonDescription] = useState();

  useEffect(() => {
    // PageLoad-Initialization of -API-Request for details
    currentPokemon
      ? requestpokemonDetails(currentPokemon.id)
      : console.log('no Detailed-Pokemon-Data');
  }, [currentPokemon]);

  const requestpokemonDetails = (PokeNumber) => {
    Api.requestpokemonDetails(
      PokeNumber,
      setPokemonDetails,
      setPokemonDescription
    );
  };
  // arrow Up click through collection
  const arrowUp = () => {
    if (currentPokemon.id > 100) {
      setMyPokemon(pokemonList[3]);
      requestpokemonDetails(currentPokemon.id - 1);
    } else {
      requestpokemonDetails(currentPokemon.id + 1);
      setMyPokemon(pokemonList[currentPokemon.id]);
    }
  };
  // arrow Down click through collection
  const arrowDown = () => {
    if (currentPokemon.id < 3) {
      if (pokemonList.length > 100) {
        return setMyPokemon(pokemonList[100]);
      }
      requestpokemonDetails(currentPokemon.id - 1);
      setMyPokemon(pokemonList[pokemonList.length - 2]);
    } else {
      requestpokemonDetails(currentPokemon.id - 1);
      setMyPokemon(pokemonList[currentPokemon.id - 2]);
    }
  };

  // size and weight and Image = real data seems to be missing inside of the api response
  const sizeResult = pokemonDetails ? (
    <span>{pokemonDetails.data.height.toFixed(1) / 10} m </span>
  ) : (
    ['no size info ']
  );
  const weightResult = pokemonDetails ? (
    <span>{pokemonDetails.data.weight} kg </span>
  ) : (
    ['no weight info ']
  );
  const imageResult = currentPokemon ? (
    <img
      src={
        'https://pokeres.bastionbot.org/images/pokemon/' +
        currentPokemon.id +
        '.png'
      }
      alt={currentPokemon.name.english}
    />
  ) : (
    ['no image information']
  );
  // types will be looped over in the jsx return statement
  const types = currentPokemon
    ? currentPokemon.type
    : ['no data about Types for this Pokemon'];
  // attacks-array
  const attacks = pokemonDetails
    ? pokemonDetails.data.moves
    : [{ move: { name: 'No Name available at current' } }];
  const attackResult = attacks
    ? // show the 6 first moves for this pokemon
      attacks.slice(0, 6).map((attack, index) => {
        return <li key={index}> {attack.move.name} </li>;
      })
    : // else pass the following sting
      'no attackResult-Data';

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    ...customStyles, // these come from your premade styles
  }));
  const classes = useStyles();

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleCloseParent}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <div className={classes.paper} id="modalFrame">
            <div className="ModalPokedex">
              <div className="modal">
                <div className="modal-content">
                  <span
                    className="close"
                    onClick={() => {
                      console.log('close was hit');
                      setFightPokemon([]);
                      setPokeInfo({
                        ...pokeInfo,
                        textInfo:
                          'Choose two Pokemons and... \nlet them fight! ',
                        chooseOrFight: true,
                        firstOrSecondChoice: false,
                        buttonShow: true,
                      });
                      handleCloseParent();
                    }}>
                    ×
                  </span>
                  <h3>
                    {' '}
                    <span className="mobileHide">Fight with: </span>{' '}
                    {currentPokemon ? currentPokemon.name.english : ''}
                    <span> No. {currentPokemon ? currentPokemon.id : ''}</span>
                  </h3>
                  <hr className="line" />
                  <div className="PokeInfo">{pokeInfo.textInfo}</div>
                  <div className="modal-container">
                    <ArrowBackIosIcon
                      onClick={() => {
                        arrowDown();
                      }}
                      color="secondary"
                      className={
                        pokeInfo.chooseOrFight ? 'showThis' : 'hideThis'
                      }></ArrowBackIosIcon>
                    <div className="ButtonAndText">
                      <Button
                        className={classes.button}
                        className={`${
                          pokeInfo.buttonShow ? 'showThis' : 'hideThis'
                        } chooseButtonInModal `}
                        variant="outlined"
                        size="small"
                        color="secondary"
                        onClick={() => {
                          fightSelectionController(
                            fightPokemon,
                            currentPokemon
                          );
                        }}>
                        Choose
                        {/*{currentPokemon ? currentPokemon.name.english : ''}*/}
                        &nbsp;
                        <span className="mobileHide">
                          {pokeInfo.firstOrSecondChoice ? 'second' : 'first'}
                          Pokemon
                        </span>
                      </Button>

                      <Button
                        className={classes.button}
                        className={`${
                          pokeInfo.chooseOrFight ? 'hideThis' : 'showThis'
                        } chooseButtonInModal `}
                        variant="outlined"
                        size="small"
                        color="secondary"
                        onClick={() => {
                          console.log('hit-and-run');
                        }}>
                        Fight! &nbsp; &nbsp;
                        {currentPokemon ? currentPokemon.name.english : ''}
                        &nbsp;against&nbsp;
                        {currentPokemon ? currentPokemon.name.english : ''}
                      </Button>
                    </div>{' '}
                    <div className="imagecontainer">
                      <p className="encodingIssue">
                        {pokemonDescription
                          ? pokemonDescription.data.flavor_text_entries[0]
                              .flavor_text
                          : // JSON.stringify(pokemonDescription.data.flavor_text_entries[0].flavor_text).replace( /[\r\n]+/gm, " " )
                            ''}
                      </p>
                      {imageResult}
                    </div>
                    <ArrowForwardIosIcon
                      onClick={() => {
                        arrowUp();
                        setPokeInfo({ ...pokeInfo, buttonShow: true });
                      }}
                      color="secondary"
                      className={
                        pokeInfo.chooseOrFight ? 'showThis' : 'hideThis'
                      }></ArrowForwardIosIcon>
                    <div>
                      <div className="stats-container">
                        <h4>Type :</h4>
                        <Typography
                          variant="body2"
                          component="div"
                          className="type-wrapper"
                          align="center">
                          {types.map((typeItem, index) => {
                            return (
                              <Chip
                                key={index}
                                className={`${classes.types} ${classes[typeItem]}`}
                                size="medium"
                                label={typeItem}
                              />
                            );
                          })}
                        </Typography>
                        <div className="simple-data">
                          <h4>Size : {sizeResult}</h4>
                          <h4>Weight : {weightResult}</h4>
                        </div>
                        <div className="usual-attacks">
                          <h4>Usual attacks :</h4>
                          <ul className="attacks-list">{attackResult}</ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default TransitionsModal;

// Documentation about the Strict-Mode Error in the Console:  It will only come up in Production
// https://stackoverflow.com/questions/61220424/material-ui-drawer-finddomnode-is-deprecated-in-strictmode
// https://stackoverflow.com/questions/61115871/finddomnode-error-on-react-material-ui-select-menu
// https://reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage
