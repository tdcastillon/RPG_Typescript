import clc from "cli-color";
import Party from "../Party/Party";

import { prompt } from 'enquirer';
import getPartyMembers from "../Party/getPartyMembers";
import heroMenu from "./HeroMenu";
import selectHeroParty from "../Party/SelectHeroParty";
import Hero from "../Hero/Hero";


/**
 * 
 * @param {Party} party - The party to display the menu for
 * @returns {Promise<void>} - A promise that resolves when the menu is done
 * @description This function will display the party menu
 */

async function partyMenu(party: Party) : Promise<void> {

    console.clear()
    console.log(clc.blue('Welcome to the Party Menu!'));

    switch(party.length) {
        case 0:
            console.log('Your party is empty');
            break;
        case 1:
            let hero: Hero | null = selectHeroParty(party, 0);
            if (hero === null) return;
            await heroMenu(hero, party);
            break;
        default:
            const questions = [
                {
                    type: 'select',
                    name: 'menu',
                    message: 'What would you like to do?',
                    choices: getPartyMembers(party)
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
}

export default partyMenu
