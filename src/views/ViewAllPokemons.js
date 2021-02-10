// ViewAllPokemons
import React from 'react';
import { useState, useEffect } from "react";
import TransitionsModal from '../components/PokemonDetailed';


// Import api functionality
import Api from "../api/index";

const ViewAllPokemons = () => {
  const [pokemonList, setPokemonList] = useState();


  // const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };


  useEffect(() => {
    Api.getAllPokemons()
      .then((res)=>{
        setPokemonList(res);
      })
      .catch((err)=>{
        console.error(err)
      })
  },[]);




  return(
    <>
      <h1>All Pokemons</h1>
{/*
  <div   onClick={handleOpen}>CLICK HERE TO OPEN MODAL</div>*/}

     {/* <TransitionsModal  openState={open} onClose={handleClose}  onOpen={handleOpen} />*/}
       <TransitionsModal />
      <div className="pokemon-list">
      {/* FIXME: get better solution for limiting/offset/streaming */}
        <ul>
          {pokemonList
            ? pokemonList.slice(0, 10).map((pokemon) => {
            return <li key={pokemon.id}>
              <a href={`/pokemons/${pokemon.id}`}>
                {pokemon.name.english}
              </a>
            </li>
          })
          : null
          }
        </ul>
      </div>
    </>
  );
};

export default ViewAllPokemons;