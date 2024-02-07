import Party from "./Party";

/**
 * 
 * @param {Party} party - The party to get the members from
 * @returns {string[]} - The names of the party members
 * @description This function will return the names of the party members
 */

function getPartyMembers(party: Party) : string[] {
    try {
        let partyMembers: string[] = [];
        for (let i = 0; i < party.length; i++) {
            console.log(party[i].hero.name);
            partyMembers.push(party[i].hero.name);
        }
        return partyMembers;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export default getPartyMembers;