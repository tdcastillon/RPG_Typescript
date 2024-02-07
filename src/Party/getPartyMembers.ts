import Party from "./Party";

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