import clc from "cli-color";
import { prompt } from 'enquirer';

import Hero from "../Hero/Hero";
import Party from "../Party/Party";

/**
 * 
 * @param {Hero} hero - The hero to display the menu for
 * @param {Party} party - The party the hero is in
 * @returns {Promise<void>} - A promise that resolves when the menu is done
 * @description This function will display the hero menu
 */

async function heroMenu(hero: Hero, party: Party) : Promise<void> {
    console.clear();

    console.log(clc.blue('Welcome to the Menu for ') + clc.green(hero.name) + clc.blue( '!'));

    const questions = [
        {
            type: 'select',
            name: 'menu',
            message: 'What would you like to do?',
            choices: [
                'View Stats' + clc.red(' (Not Implemented) '),
                'View Equipment' + clc.red(' (Not Implemented) '),
                'View Skills' + clc.red(' (Not Implemented) '),
                'Dismiss' + clc.red(' (Not Implemented) '),
                'Leave'
            ]
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

export default heroMenu;