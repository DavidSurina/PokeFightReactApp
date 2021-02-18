const FightController = (pokeArr) => {
    const poke1 = pokeArr[0];
    const poke2 = pokeArr[1];
    console.log(poke1, poke2)
    if(poke1.base.Attack > poke2.base.Attack) {
        console.log(`winner is ${poke1.name.english}`)
        return pokeArr;
    } else {
        console.log(`winner is ${poke2.name.english}`)
        return [poke2, poke1]
    } 
}

export default FightController;