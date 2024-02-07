import Hero from "../Hero/Hero";
import Party from "./Party";

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