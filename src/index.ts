import Hero from "./Hero/Hero";
import Game from "./Game/Game";
import StartJourney from "./Misc/startJourney";
import addHeroParty from "./Party/addHeroParty";
import GameLoop from "./Game/GameLoop";

const main = async () => {
    const game: Game = {
        Party: {
            length: 0
        },
        Reservees: [],
        GroupInventory: [],
        money: 0
    };

    addHeroParty(await StartJourney(), game.Party);

    GameLoop(game);

};

main();
