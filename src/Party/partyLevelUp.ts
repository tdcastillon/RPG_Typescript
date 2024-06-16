import clc from "cli-color";
import Hero from "../Hero/Hero";
import Party from "./Party";
import selectHeroParty from "./selectHeroParty";

async function partyLevelUp(party: Party, exp: number) {
    for (let i = 0; i < party.length; i++) {
        let hero : Hero | null = selectHeroParty(party, i)
        if ((hero) && (hero?.getStats().getProperty("HP") > 0)) {
            console.log(hero.getName() + " gains " + clc.green(exp + " EXP") + "!")
            await hero.gainXP(exp)
        }
    }
}

export default partyLevelUp;