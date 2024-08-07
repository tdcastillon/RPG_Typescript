import Hero from "../Hero/Hero";
import Party from "../Party/Party";

/**
 *  The interface for the game
 * @property {Party} Party - The party of the player
 * @property {Array<Hero>} Reservees - The reservees of the player
 * @property {any} GroupInventory - The inventory of the player
*/
interface Game {
    Party: Party;
    Reservees: Array<Hero>;
    GroupInventory: any;
}

export default Game;