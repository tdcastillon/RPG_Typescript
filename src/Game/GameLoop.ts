import Hero from "../Hero/Hero";
import mainMenu from "../Menus/mainMenu";
import Game from "./Game";

async function GameLoop(game: Game)
{
    let isGameOver = false;

    while (!isGameOver) {
        isGameOver = await mainMenu(game);
    }
}

export default GameLoop;