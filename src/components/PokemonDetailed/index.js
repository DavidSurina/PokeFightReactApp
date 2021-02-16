// MODAL COMPONENT
// https://material-ui.com/components/modal/#transitions
import React, { useState, useEffect  } from 'react';
import {Modal, makeStyles, Backdrop, Fade } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import customStyles from "../PokeCard/materialStyle.css.js";

// API IMPORT caused an issue =  I will look into this later
// Import api functionality
// import Api from "./pokeAPI.js";
import axios from "axios";

import './detailed.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon    from '@material-ui/icons/ArrowBackIos';


const  TransitionsModal = ({ handleCloseParent, open, currentPokemon, setMyPokemon, pokemonList, setFightPokemon, fightPokemon  }) => {

  const [pokemonDetails, setPokemonDetails] = useState();
  const [pokemonDescription, setPokemonDescription] = useState();

  useEffect(() => {
    // PageLoad-Initialization of -API-Request for details
   currentPokemon ?  requestpokemonDetails(currentPokemon.id) :  console.log('no Detailed-Pokemon-Data')
  },[currentPokemon]);

  // copied from PokeCard/ Component: ImgMediaCard
  const fightPokemonSelection = (arr) => {
    if(arr.length < 2) {
      //const oArray = arr
      //console.log(oArray)
      const nArray = arr;
      nArray.push(currentPokemon);
      console.log(nArray);
      setFightPokemon(nArray)
      alert(`${currentPokemon.name.english} ready to fight`)
    } else {
      //console.log(arr)
      alert("you chose 2 pokemon already")
    }
  }

   const requestpokemonDetails = (PokeNumber) => {
        let details = "https://pokeapi.co/api/v2/pokemon/"
        let description = "https://pokeapi.co/api/v2/pokemon-species/"

        const URLdetails = axios.get(details+PokeNumber);
        const URLDescription = axios.get(description+PokeNumber);

        axios.all([URLdetails, URLDescription]).then(axios.spread((...responses) => {
              const resDetails = responses[0]
              setPokemonDetails(resDetails);
              const resDescription = responses[1]
              setPokemonDescription(resDescription);
        }))
        // reminaing tiny Question , will still look into it
        // .catch(errors => {
        //       console.error(error);
        // })
    }
      // arrow Up click through collection
      const arrowUp = () => {
                if (currentPokemon.id > 100 ) {
                   setMyPokemon(pokemonList[3])
                   requestpokemonDetails(currentPokemon.id-1);
                  }
                 else {
                  requestpokemonDetails(currentPokemon.id+1);
                  setMyPokemon(pokemonList[currentPokemon.id]);
                }
    }
      // arrow Down click through collection
      const arrowDown = () => {
                if (currentPokemon.id < 3 ) {
                      if (pokemonList.length > 100) {
                        return setMyPokemon(pokemonList[100])
                      }
                  requestpokemonDetails(currentPokemon.id-1);
                  setMyPokemon(pokemonList[pokemonList.length-2])
                  }
                 else {
                  requestpokemonDetails(currentPokemon.id-1);
                  setMyPokemon(pokemonList[currentPokemon.id-2]);
                }
    }

      // size and weight and Image = real data seems to be missing inside of the api response
      const sizeResult   = pokemonDetails ? <span>{pokemonDetails.data.height.toFixed(1)/10} m </span> : ['no size info '] ;
      const weightResult = pokemonDetails ? <span>{pokemonDetails.data.weight}  kg </span> : ['no weight info '] ;
      const imageResult  = currentPokemon ? <img src={'https://pokeres.bastionbot.org/images/pokemon/'+currentPokemon.id+'.png'}  alt={currentPokemon.name.english}  />  : ['no image information'] ;

      // types will be looped over in the jsx return statement
      const types = currentPokemon ? currentPokemon.type : ['no data about Types for this Pokemon'] ;


      // attacks-array
      const attacks = pokemonDetails ? pokemonDetails.data.moves   : [{'move': {'name' : 'No Name available at current'}}]
      const attackResult = attacks ?
      // show the 6 first moves for this pokemon
      attacks.slice(0, 6).map((attack, index) =>  { return  <li key={index}> {attack.move.name}  </li> } )
      // else pass the following sting
      : 'no attackResult-Data';

     // Modal Styling
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
      }));


      const classesModal = useStyles();
      // const useStyles = makeStyles();

      const classesButton = useStyles(customStyles);


  return (
    <>
      <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classesModal.modal}
      open={open}
      onClose={handleCloseParent}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
      timeout: 500,
      }}
      >
      <Fade in={open} >
         <div className={classesModal.paper} id="modalFrame" >
              <div className="ModalPokedex">
               <div className="modal">
                  <div className="modal-content">
                     <span className="close" onClick={handleCloseParent}>×</span>
                      <h3> Fight with: {currentPokemon ? currentPokemon.name.english : ''}
                          <span> No.00 {currentPokemon ? currentPokemon.id : ''}</span></h3>
                       <hr className="line" />
                     <div className="modal-container">
                        <ArrowBackIosIcon  onClick={()=> {arrowDown()}}  color="secondary"></ArrowBackIosIcon>
                        <div className="ButtonAndText">
                          <Button className={classesModal.button} variant="outlined" size="small" color="secondary"
                              onClick={() => { fightPokemonSelection(fightPokemon)}}>
                              Choose Pokemon for fight!
                          </Button>
                             <p className="encodingIssue">{pokemonDescription ?
                                  pokemonDescription.data.flavor_text_entries[0].flavor_text
                                 // JSON.stringify(pokemonDescription.data.flavor_text_entries[0].flavor_text).replace( /[\r\n]+/gm, " " )
                                 : ''
                               }
                               </p>
                          </div>  <div className="imagecontainer">
                        {imageResult}
                        </div>
                       <ArrowForwardIosIcon onClick={()=> {arrowUp()}} color="secondary"></ArrowForwardIosIcon>
                        <div>
                          <div className="stats-container">
                              <h4>
                              Type :</h4>
                               {types.map((type, index) =>  { return  (
                                  <Chip key={index} className={`${classesButton.type} ${classesButton[type]}`} size="medium" label={type} />
                                  )
                               })}
                              <div className="simple-data">
                                 <h4>Size : {sizeResult}</h4>
                                 <h4>Weight : {weightResult}</h4>
                              </div>
                              <div className="usual-attacks">
                                 <h4>Usual attacks :</h4>
                                 <ul className="attacks-list">
                                     {attackResult}
                                 </ul>
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
}

export default TransitionsModal;

// Documentation about the Strict-Mode Error in the Console:  It will only come up in Production
// https://stackoverflow.com/questions/61220424/material-ui-drawer-finddomnode-is-deprecated-in-strictmode
// https://stackoverflow.com/questions/61115871/finddomnode-error-on-react-material-ui-select-menu
// https://reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage
