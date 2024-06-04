import mainMenu from "../Menus/mainMenu";
import Game from "./Game";

/**
 *  The main game loop for the game
 * @param {Game} game - The game instance
*/

async function GameLoop(game: Game)
{
    let isGameOver = false;

    while (!isGameOver) {
        isGameOver = await mainMenu(game);
    }
}

export default GameLoop;