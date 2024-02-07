import Hero from "./Hero/Hero";
import Game from "./Game/Game";
import StartJourney from "./Misc/startJourney";
import addHeroParty from "./Party/addHeroParty";
import GameLoop from "./Game/GameLoop";

const main = async () => {
    const game: Game = {
        Party: [],
        Reservees: [],
        GroupInventory: [],
        money: 0
    };

    addHeroParty(await StartJourney(), game.Party);

    console.log(game.Party);

    GameLoop(game);

};

main();
