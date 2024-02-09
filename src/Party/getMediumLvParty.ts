import Party from "./Party";

function getMediumLvParty(party: Party): number {
    if (party.length === 1)
        return party[0].hero.getStats().getProperty("LVL");
    let sum = 0;
    for (let i = 0; i < party.length; i++) {
        sum += party[i].hero.getStats().getProperty("LVL");
    }
    return Math.floor(sum / party.length);
}

export default getMediumLvParty;