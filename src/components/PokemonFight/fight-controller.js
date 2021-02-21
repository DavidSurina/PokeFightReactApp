import Api from '../../api/index';

const FightController = (pokeArr) => {
  const poke1 = pokeArr[0];
  const poke2 = pokeArr[1];
  let date = new Date();
  date = date.toLocaleString();
  if (poke1.base.Attack > poke2.base.Attack) {
    const fight = {
      date: date,
      winner: {
        winner_id: pokeArr[0].id,
        winner_name: pokeArr[0].name.english,
      },
      looser: {
        looser_id: pokeArr[1].id,
        looser_name: pokeArr[1].name.english,
      },
    };
    Api.saveFight(fight);
    return [fight];
  } else {
    const fight = {
      date: date,
      winner: {
        winner_id: pokeArr[1].id,
        winner_name: pokeArr[1].name.english,
      },
      looser: {
        looser_id: pokeArr[0].id,
        looser_name: pokeArr[0].name.english,
      },
    };
    Api.saveFight(fight);
    return [fight];
  }
};

export default FightController;
