import Hero from "./Hero/Hero";
import Game from "./Game/Game";
import StartJourney from "./Misc/startJourney";
import addHeroParty from "./Party/addHeroParty";
import GameLoop from "./Game/GameLoop";

const main = async () => {
    const game: Game = {
        Party: {
            length: 0,
            money:  0
        },
        Reservees: [],
        GroupInventory: [],
    };

    addHeroParty(await StartJourney(), game.Party);

    GameLoop(game);

};

main();
