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
        return [...pokeArr.reverse()];
    }
}

const FightController2 = (pokeArr, hp1, hp2) => {
    let turnCounter = 1;
    let date = new Date();
    date = date.toLocaleString();
    const whoIsFirst = speedCheck(pokeArr);
    let timer = 0;   

    let firstPokeLife = whoIsFirst[0].base.HP;
    let secondPokeLife = whoIsFirst[1].base.HP;
    console.log(firstPokeLife)
    console.log(secondPokeLife)

    while(firstPokeLife > 0 && secondPokeLife > 0) {
            if(turnCounter%2 !== 0) {
                firstPokeLife = firstPokeLife - (whoIsFirst[1].base.Attack / (whoIsFirst[0].base.Defense/10));
                console.log(firstPokeLife)
                setTimeout(() => {
                    
                }, 1000*timer);
                timer+=3;
                turnCounter++;
            } else {
                secondPokeLife = secondPokeLife - (whoIsFirst[0].base.Attack / (whoIsFirst[1].base.Defense/10));
                console.log(secondPokeLife)
                setTimeout(() => {
                    
                }, 1000*timer);
                timer+=3;
                turnCounter++;
            }
    }
    if (firstPokeLife <= 0) {
        console.log(whoIsFirst[1].name.english+ " won")
        return [{
            winner: whoIsFirst[1].name.english,
            loser: whoIsFirst[0].name.english,
            date: date,
            turns: turnCounter
        }]
    } else if (secondPokeLife <= 0) {
        console.log(whoIsFirst[0].name.english+ " won")
        return [{
            winner: whoIsFirst[0].name.english,
            loser: whoIsFirst[1].name.english,
            date: date,
            turns: turnCounter
        }]
    }
}

export default FightController2;