const FightController = (pokeArr) => {
    const poke1 = pokeArr[0];
    const poke2 = pokeArr[1];
    let date = new Date();
    date = date.toLocaleString();
    if(poke1.base.Attack > poke2.base.Attack) {
        console.log(`winner is ${poke1.name.english}`)
        return [{
            winner: pokeArr[0].name.english,
            loser: pokeArr[1].name.english,
            date: date,
        }]
    } else {
        console.log(`winner is ${poke2.name.english}`)
        return [{
            winner: pokeArr[1].name.english,
            loser: pokeArr[0].name.english,
            date: date,
        }]
    } 
}

export default FightController;