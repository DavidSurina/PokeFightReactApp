/*Function checking the speed and edciding who is going first*/
const speedCheck = (pokeArr) => {
    const poke1 = pokeArr[0];
    const poke2 = pokeArr[1];
    if(poke1.base.Speed > poke2.base.Speed) {
        console.log(`${poke1.name.english} is faster`)
        return pokeArr;
    } else {
        console.log(`${poke2.name.english} is faster`)
        //return [poke2, poke1];
        return pokeArr.reverse();
    }
}


const FightController2 = (pokeArr) => {
    let turnCounter = 1;

    const whoIsFirst = speedCheck(pokeArr);

    let firstPokeLife = whoIsFirst[0].base.HP;
    let secondPokeLife = whoIsFirst[1].base.HP;
    console.log(firstPokeLife)
    console.log(secondPokeLife)
    while(firstPokeLife > 0 && secondPokeLife > 0) {
        if(turnCounter%2 !== 0) {
            firstPokeLife = firstPokeLife - (whoIsFirst[1].base.Attack / (whoIsFirst[0].base.Defense/10))
            console.log(firstPokeLife)
            turnCounter++;
        } else {
            secondPokeLife = secondPokeLife - (whoIsFirst[0].base.Attack / (whoIsFirst[1].base.Defense/10))
            console.log(secondPokeLife)
            turnCounter++;
        }
    }
}

export default FightController2;