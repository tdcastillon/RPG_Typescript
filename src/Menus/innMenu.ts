import Game from "../Game/Game";

import { prompt  } from 'enquirer';
import clc from 'cli-color';
import Party from "../Party/Party";

/**
 * 
 * @param {Partt} party - The game to display the inn menu for
 * @returns {Promise<void>}
 *  This function will display the inn menu
 */

async function innMenu(party: Party) : Promise<void> {

    console.clear();

    console.log(clc.blue('Welcome to the Inn, adventurer !'));

    const question = {
        type: 'select',
        name: 'choice',
        message: 'What would you like to do?',
        choices: [
            'Rest' + clc.red(' (Not Implemented) '),
            'Recruit' + clc.red(' (Not Implemented) '),
            'Leave'
        ]
    };

    try {
        let answer : {choice: string} = await prompt(question)
        
        switch(answer.choice) {
            default:
                return;
        }
    } catch (err) {
        console.log(clc.bgRed(err))
        return;
    }
}

export default innMenu