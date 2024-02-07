import clc from "cli-color";
import Party from "../Party/Party";

import { prompt } from 'enquirer';
import getPartyMembers from "../Party/getPartyMembers";

async function partyMenu(party: Party) : Promise<void> {

    console.clear()
    console.log(clc.blue('Welcome to the Party Menu!'));

    console.log('Your party members are: ');
    console.log(getPartyMembers(party));

    const questions = [
        {
            type: 'select',
            name: 'menu',
            message: 'What would you like to do?',
            choices: ['View Party', 'Leave']
        }
    ];

    try {
        let answer: {menu: string} = await prompt(questions);
        console.log(answer.menu);

    } catch (err) {
        console.log(clc.bgRed(err))
        return;
    }

}

export default partyMenu