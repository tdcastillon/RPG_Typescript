import Hero from "../Hero/Hero";

import { prompt } from 'enquirer';

import BeginHero from "../Interfaces/BeginHero";
import selectJob from "../Job/Functions/selectJob";

async function StartJourney() : Promise<Hero> {
    let prepareHero: BeginHero = {} as BeginHero;

    const question = {
      type: 'input',
      name: 'username',
      message: 'What is your username?'
    };

    const jobQuestion = {
        type: 'select',
        name: 'job',
        message: 'What is your job?',
        choices: ['Mage', 'Warrior', 'Priest']
    };

    let _answer: {username: string} = await prompt(question); 

    let _answer2: {job: string} = await prompt(jobQuestion);

    prepareHero = {
        name: _answer.username,
        job: selectJob(_answer2.job)
    };

    return Promise.resolve(new Hero(prepareHero.name, prepareHero.job));

}

export default StartJourney;