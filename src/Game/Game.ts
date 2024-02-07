import Hero from "../Hero/Hero";
import Party from "../Party/Party";

interface Game {
    Party: Party;
    Reservees: Array<Hero>;
    GroupInventory: any;
    money: number
}

export default Game;