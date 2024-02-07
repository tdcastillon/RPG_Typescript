import Game from '../Game/Game';
import clc from 'cli-color';

import { prompt } from 'enquirer';
import displayQuitMessage from '../Misc/displayQuitMessage';

// functions
import innMenu from './innMenu';
import partyMenu from './partyMenu';


async function mainMenu(game: Game) : Promise<boolean> {

    console.clear()
    console.log(clc.blue('Welcome to the Main Menu!'));

    const questions = [
        {
            type: 'select',
            name: 'menu',
            message: 'What would you like to do?',
            choices: [
                'Go to Dungeon Selection' + clc.red(' (Not Implemented) '),
                'Go to the Inn',
                'Go to the Shop' + clc.red(' (Not Implemented) '),
                'View Inventory' + clc.red(' (Not Implemented) '),
                'View Party',
                'Save Menu' + clc.red(' (Not Implemented) '),
                'Quit'
            ]
        }
    ];

    try {
        let answer: {menu: string} = await prompt(questions);

        switch (answer.menu) {
            case 'Go to Dungeon Selection':
                console.log('Going to Dungeon Selection');
                return true;
            case 'Go to the Inn':
                await innMenu(game)
                return false;
            case 'Go to the Shop (not implemented)':
                console.log('Going to the Shop');
                return true;
            case 'View Inventory (not implemented)':
                console.log('Viewing Inventory');
                return true;
            case 'View Party':
                await partyMenu(game.Party);
                return false;
            case 'Save Menu (not implemented)':
                console.log('Save Menu');
                return true;
            case 'Quit':
                displayQuitMessage();
                return true;
            default:
                console.log('Invalid Choice');
                return true;
        }
    } catch (error) {
        clc.red(error);
        return true;
    }
}

export default mainMenu;