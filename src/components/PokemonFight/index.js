import FightController from './fight-controller';

import './style.css';
import './blink.css';
import { useState, useEffect } from 'react';

export default function PokemonFight({ fightingPoke, fightHistory }) {
  const [counter, setCounter] = useState(4);
  const [resultDisplay, setResultDisplay] = useState(8);
  const [viewCounter, setViewCounter] = useState(false);
  const [viewResult, setViewResult] = useState(false);
  const [winnerObj, setWinnerObj] = useState([]);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    if (!timer) {
      setViewCounter(true);
    }
    return () => {
      clearInterval(timer);
    };
  }, [counter]);

  useEffect(() => {
    const resultTimer =
      resultDisplay > 0 &&
      setInterval(() => setResultDisplay(resultDisplay - 1), 1000);
    if (!resultTimer) {
      setViewResult(true);
      setWinnerObj(FightController(fightingPoke));
    }
    return () => {
      clearInterval(resultTimer);
    };
  }, [resultDisplay, fightingPoke]);

  if (fightingPoke.length === 2) {
    return (
      <>
        <div
          className={`${
            viewCounter ? 'hideThis' : 'showThis'
          } fightWrapper counterDesign `}>
          Fight Preparation: {counter}
        </div>
        <div
          className={`${viewCounter ? 'showThis' : 'hideThis'} fightWrapper `}>
          {/* ##### Game Statistic ###### */}
          <div
            className={`${
              viewResult ? 'showThis' : 'hideThis'
            } tableOfContent wrapperPane `}>
            Game Statistics:
            <span className="toc">
              <span className="tocLabel winner">
                {winnerObj.length > 0 ? winnerObj[0].winner.winner_name : ''}
              </span> vs {winnerObj.length > 0 ? winnerObj[0].looser.looser_name : ''}
              
            </span>
            <span className="toc">
              <span className="tocLabel" id="date">
                Date:
              </span>{' '}
              {winnerObj.length > 0 ? winnerObj[0].date : ''}
            </span>
          </div>
          {/* ##### Pokemon Fight ###### */}
          <div className="pokefight-wrapper wrapperPane ">
            <div
              className={`${
                viewResult ? 'hideThis' : 'showThis'
              } animationtime`}>
              <span className="blink">Animation</span>
            </div>
            <div className="pokefight-top-wrapper">
              <div className="pokefight-top-name-wrapper">
                <h2
                  onClick={() => {
                    setWinnerObj(FightController(fightingPoke));
                  }}>
                  {fightingPoke[1].name.english}
                </h2>
                <progress
                  id="hp"
                  value="100"
                  max={fightingPoke[1].base.HP}></progress>
                <p className="pokefight-stats">Hp: {fightingPoke[1].base.HP}</p>
                <p className="pokefight-stats">
                  Speed: {fightingPoke[1].base.Speed}
                </p>
                <p className="pokefight-stats">
                  Attack: {fightingPoke[1].base.Attack}
                </p>
                <p className="pokefight-stats">
                  Defense: {fightingPoke[1].base.Defense}
                </p>
                <p className="pokefight-stats">
                  Sp.Attack: {fightingPoke[1].base['Sp. Attack']}
                </p>
                <p className="pokefight-stats">
                  Sp.Defense: {fightingPoke[1].base['Sp. Defense']}
                </p>
              </div>
              <img
                className="pokefight-top-img"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${fightingPoke[1].id}.png`}
                alt="second-poke"
              />
            </div>
            <div className="pokefight-bot-wrapper">
              <img
                className="pokefight-bot-img"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${fightingPoke[0].id}.png`}
                alt="first-poke"
              />
              <div className="pokefight-bot-name-wrapper">
                <h2>{fightingPoke[0].name.english}</h2>
                <progress
                  id="hp"
                  value="100"
                  max={fightingPoke[0].base.HP}></progress>
                <p className="pokefight-stats">Hp: {fightingPoke[0].base.HP}</p>
                <p className="pokefight-stats">
                  Speed: {fightingPoke[0].base.Speed}
                </p>
                <p className="pokefight-stats">
                  Attack: {fightingPoke[0].base.Attack}
                </p>
                <p className="pokefight-stats">
                  Defense: {fightingPoke[0].base.Defense}
                </p>
                <p className="pokefight-stats">
                  Sp.Attack: {fightingPoke[0].base['Sp. Attack']}
                </p>
                <p className="pokefight-stats">
                  Sp.Defense: {fightingPoke[0].base['Sp. Defense']}
                </p>
              </div>
            </div>
          </div>
          {/* ##### Game History ###### */}
          <div
            className={`${
              viewResult ? 'showThis' : 'hideThis'
            } history wrapperPane `}>
            Game History:
            <ul id="history" className="toc">
              { 
                fightHistory.map(fight => {
                  return <li key={fight._id}><span className="winner">{fight.winner.winner_name}</span> vs {fight.looser.looser_name}</li>
                })
              }
            </ul>
          </div>
        </div>
        <audio
          src="https://play.pokemonshowdown.com/audio/hgss-johto-trainer.mp3"
          className="poke-audio"
          volume="0.1"
          controls
          autoPlay>
        </audio>
      </>
    );
  } else {
    return <h1>Sorry select pokemon to fight</h1>;
  }
}
