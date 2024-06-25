import Hero from "./Hero/Hero";
import StartJourney from "./Misc/startJourney";
import addHeroParty from "./Party/addHeroParty";
import GameLoop from "./Game/GameLoop";
import Party from "./Party/Party";

const main = async () => {
    let party : Party = {
        length: 0,
        money:  0,
        inventory: []
    }

    let hero : Hero = await StartJourney()

    addHeroParty(hero, party)
    GameLoop(party);

};

main();
