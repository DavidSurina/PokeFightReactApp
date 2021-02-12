import React, { useState, useEffect } from 'react';
import {Modal, makeStyles, Backdrop, Fade } from '@material-ui/core';
import './detailed.css';

// MODAL COMPONENT
// https://material-ui.com/components/modal/#transitions

// Documentation about the Strict-Mode Error in the Console:  It will only come up in Production
// https://stackoverflow.com/questions/61220424/material-ui-drawer-finddomnode-is-deprecated-in-strictmode
// https://stackoverflow.com/questions/61115871/finddomnode-error-on-react-material-ui-select-menu
// https://reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage

const  TransitionsModal = ({openModal, currentPokemon}) => {


  const [open, setOpen] =  useState(false);
  const handleOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };
  useEffect(() => { setOpen(!open);    },[openModal]);


// workaround: we fabricating the src URL to the Image  to comensate for the missing data
  const src = 'https://pokeres.bastionbot.org/images/pokemon/1.png';

  // size and weight and Image = real data seems to be missing inside of the api response
  const sizeResult   = currentPokemon ? <span>{currentPokemon.base.Speed} m </span> : ['no size information'] ;
  const weightResult = currentPokemon ? <span>{currentPokemon.base.Defense}  kg </span> : ['no weight information'] ;
  const imageResult  = currentPokemon ? <img src={src}  alt={currentPokemon.name.english}  />  : ['no image information'] ;

  // types-array
  const types = currentPokemon ? currentPokemon.type : ['no data about Types for this Pokemon'] ;
  const typesResult = types.map((type, index) =>  { return  <span> {type}  </span> } )

  // attacks-array = real data seems to be missing inside of the api response
  const attacks = currentPokemon ? currentPokemon.type : ['no data about Attacks for this Pokemon'] ;
  const attackResult = types.map((type, index) =>  { return  <span> {type}  </span> } )

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
         <div className={classes.paper} id="modalFrame" >
              <div className="ModalPokedex">
               <div className="modal">
                  <div className="modal-content">
                     <span className="close" onClick={handleClose}>×</span>
                     <h3>{currentPokemon ? currentPokemon.name.english : ''}<span> No.001</span></h3>
                     <div className="modal-container">
                        {imageResult}
                        <div>
                           <p>A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.</p>
                           <div className="stats-container">
                              <h4>Type : {typesResult} </h4>
                              <div className="simple-data">
                                 <h4>Size : {sizeResult}</h4>
                                 <h4>Weight : {weightResult}</h4>
                              </div>
                              <div className="usual-attacks">
                                 <h4>Usual attacks :</h4>
                                 <ul className="attacks-list">
                                    {/*{attacks}*/}
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