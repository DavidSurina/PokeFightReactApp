import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './detailed.css';



const  TransitionsModal = () => {


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
  const [open, setOpen] =  useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
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
              <h3>POKE-NAME<span> No.001</span></h3>


          <div className="modal-container">
                <img src="https://pokeres.bastionbot.org/images/pokemon/1.png" alt="pokemon1"/>
              <div>
              <p>A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.</p>
              <div className="stats-container">
                <h4>Type : <span>grass, poison</span></h4>
                <div className="simple-data"><h4>Size : <span>0.7 m</span></h4><h4>Weight : <span>6.9 kg</span></h4></div>
                <div className="usual-attacks"><h4>Usual attacks :</h4>
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
    </div>
  );
}

// fix Material-UI Bug-message in Console
// https://material-ui.com/guides/composition/#caveat-with-strictmode
export default React.forwardRef((props, ref) => <TransitionsModal {...props} forwardedRef={ref} />);
// instead of:
//export default TransitionsModal;