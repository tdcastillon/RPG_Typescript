import Hero from "../Hero/Hero";
import Party from "./Party";

/**
 * 
 * @param {Hero} hero - The hero to add to the party
 * @param {Party} party - The party to add the hero to
 * @returns {boolean} - True if the hero was added to the party, false if the party is full
 * @description This function will add a hero to the party. If the party is full, it will return false
 */

function addHeroParty(hero: Hero, party: Party): boolean {
    if (party.length === 0) {
        party[0] = { hero, position: 0 };
        party.length++;
        return true;
    } else {
        if (party.length < 4) {
            party[party.length] = { hero, position: party.length };
            party.length++;
            return true;
        } else {
            console.log('Party is full');
            return false;
        }
    }
}
export default addHeroParty;