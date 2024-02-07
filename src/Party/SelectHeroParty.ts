import Hero from "../Hero/Hero";
import Party from "./Party";

/**
 * 
 * @param party - The party to select the hero from
 * @param position - The position of the hero in the party
 * @return {Hero | null} - The hero in the party or null if there is no hero in that position
 */

function selectHeroParty(party: Party, position: number): Hero | null {
    if (party[position] !== undefined) {
        return party[position].hero;
    } else {
        console.log("No hero in this position.");
        return null;
    }
}

export default selectHeroParty;