import Hero from "../Hero/Hero";
import Party from "./Party";

function addHeroParty(hero: Hero, party: Party) : boolean {
    if (party.length < 4) {
        party[party.length] = {
            hero: hero,
            position: party.length
        };
        party.length++;
        return true;
    } else {
        console.log("Party is full.");
        return false;
    }
}

export default addHeroParty;