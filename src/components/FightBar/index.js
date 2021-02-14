import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function FightBar({ fightingPoke, reset }) {
  return (
      <section className="fight-bar">
        <div className="fighter-one-wrapper">
          <h3 className="fighter-one-name">
            {fightingPoke[0] ? fightingPoke[0].name.english : 'Charizard'}
          </h3>
          <img
            className="fighter-one-img"
            src={
              fightingPoke[0]
                ? `https://pokeres.bastionbot.org/images/pokemon/${fightingPoke[0].id}.png`
                : 'https://pokeres.bastionbot.org/images/pokemon/6.png'
            }
            alt="fighter-one"
          />
        </div>
        <div className="fight-button-wrapper">
          <p className="vs-sign">VS</p>
          <Link to={`/pokemons/fight`} className="fight-button">FIGHT!</Link>
          <button
            className="reset-button"
            onClick={() => {
              reset([]);
              //console.log(fightingPoke);
            }}>
            reset
          </button>
        </div>
        <div className="fighter-two-wrapper">
          <h3 className="fighter-two-name">
            {fightingPoke[1] ? fightingPoke[1].name.english : 'Blastoise'}
          </h3>
          <img
            className="fighter-two-img"
            src={
              fightingPoke[1]
                ? `https://pokeres.bastionbot.org/images/pokemon/${fightingPoke[1].id}.png`
                : 'https://pokeres.bastionbot.org/images/pokemon/9.png'
            }
            alt="fighter-one"
          />
        </div>
      </section>
  );
}
