import React, { useState, useEffect } from 'react';
import {Modal, makeStyles, Backdrop, Fade } from '@material-ui/core';
import './detailed.css';

// MODAL COMPONENT
// https://material-ui.com/components/modal/#transitions

// Documentation about the Strict-Mode Error in the Console:  It will only come up in Production
// https://stackoverflow.com/questions/61220424/material-ui-drawer-finddomnode-is-deprecated-in-strictmode
// https://stackoverflow.com/questions/61115871/finddomnode-error-on-react-material-ui-select-menu
// https://reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage

const  TransitionsModal = (openModal, currentPokemon) => {

  const {currentPokemonNow} = currentPokemon;
  //
  console.log('currentPokemonNow from Child-Component; ' ,  currentPokemonNow)
  const [open, setOpen] =  useState(false);
  const handleOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };
  useEffect(() => { setOpen(!open);    },[openModal]);

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
  const classes = useStyles();


  //  console.log('currentPokemon   after 3000ms from Child-comp: ', currentPokemon);


  return (
      <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
      timeout: 500,
      }}
      >
      <Fade in={open}>
         <div className={classes.paper} id="modalFrame" > {currentPokemon ? "yes"  : "nix"}
            <div className="ModalPokedex">
               <div className="modal">
                  <div className="modal-content">
                     <span className="close" onClick={handleClose}>×</span>
                     <h3>POKE-NAME<span> No.001</span></h3>
                     <div className="modal-container">
                        <img src="https://pokeres.bastionbot.org/images/pokemon/1.png" alt="pokemon1"/>
                        <div>
                           <p>A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.</p>
                           <div className="stats-container">
                              <h4>Type : <span>grass, poison</span></h4>
                              <div className="simple-data">
                                 <h4>Size : <span>0.7 m</span></h4>
                                 <h4>Weight : <span>6.9 kg</span></h4>
                              </div>
                              <div className="usual-attacks">
                                 <h4>Usual attacks :</h4>
                                 <ul className="attacks-list">
                                    <li>razor-wind - </li>
                                    <li>swords-dance - </li>
                                    <li>cut - </li>
                                    <li>bind</li>
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
  );
}

export default TransitionsModal;