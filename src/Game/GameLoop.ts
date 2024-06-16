import mainMenu from "../Menus/mainMenu";
import Party from "../Party/Party";
import Game from "./Game";

/**
 *  The main game loop for the game
 * @param {Party} party - The game instance
*/

async function GameLoop(party: Party)
{
    let isGameOver = false;

    while (!isGameOver) {
        isGameOver = await mainMenu(party);
    }
}

export default GameLoop;