import Party from "./Party";

/**
 * 
 * @param {Party} party - The party to get the medium level of
 * @returns {number} - The medium level of the party
 *  This function will return the medium level of the party
*/
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