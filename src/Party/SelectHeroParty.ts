import Hero from "../Hero/Hero";
import Party from "./Party";

function selectHeroParty(party: Party, position: number): Hero | null {
    if (party[position] !== undefined) {
        return party[position].hero;
    } else {
        console.log("No hero in this position.");
        return null;
    }
}

export default selectHeroParty;