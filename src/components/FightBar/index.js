import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function FightBar({ fightingPoke, reset }) {
  return (
    <section className="fight-bar">
      {/*----Fighter One Block----*/}
      <div className="fighter-one-wrapper">
        <h3 className="fighter-one-name">
          {fightingPoke[0] ? fightingPoke[0].name.english : 'Choose'}
        </h3>
        <img
          className="fighter-one-img"
          src={
            fightingPoke[0]
              ? `https://pokeres.bastionbot.org/images/pokemon/${fightingPoke[0].id}.png`
              : 'https://i.imgur.com/zeQ649O.png'
          }
          alt="fighter-one"
        />
      </div>

      {/*----Block With Fight and Reset Button----*/}
      <div className="fight-button-wrapper">
        <p className="vs-sign">VS</p>
        <Link
          to={fightingPoke.length === 2 ? `/pokemons/fight` : `/`}
          className={
            fightingPoke.length === 2 ? 'fight-button-a' : 'fight-button-na'
          }>
          FIGHT!
        </Link>
        <button
          className="reset-button"
          onClick={() => {
            reset([]);
          }}>
          reset
        </button>
      </div>

      {/*----Fighter Two Block----*/}
      <div className="fighter-two-wrapper">
        <h3 className="fighter-two-name">
          {fightingPoke[1] ? fightingPoke[1].name.english : 'Choose'}
        </h3>
        <img
          className="fighter-two-img"
          src={
            fightingPoke[1]
              ? `https://pokeres.bastionbot.org/images/pokemon/${fightingPoke[1].id}.png`
              : 'https://i.imgur.com/zeQ649O.png'
          }
          alt="fighter-one"
        />
      </div>
    </section>
  );
}
