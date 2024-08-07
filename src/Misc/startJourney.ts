import Hero from "../Hero/Hero";

import { prompt } from 'enquirer';

import selectJob from "../Job/Functions/selectJob";
import beginHero from "../Interfaces/beginHero";

/**
 *  This function will start the journey of the hero
 * @returns {Promise<Hero>}
 * @async
 */
async function StartJourney() : Promise<Hero> {
    let prepareHero: beginHero = {
        name: ''
    } as beginHero;
    let repose: boolean = true

    const question = {
      type: 'input',
      name: 'username',
      message: 'What is your username?',
      initial: "Hero"
    };

    const jobQuestion = {
        type: 'select',
        name: 'job',
        message: 'What is your job?',
        choices: ['Mage', 'Warrior', 'Priest']
    };

    while (repose) {
        let _answer: {username: string} = await prompt(question);
        if (_answer.username.length > 0) {
            repose = false
            prepareHero.name = _answer.username
        }
    }

    let _answer2: {job: string} = await prompt(jobQuestion);
    prepareHero.job = selectJob(_answer2.job);

    return new Hero(prepareHero.name, prepareHero.job);
}

export default StartJourney;