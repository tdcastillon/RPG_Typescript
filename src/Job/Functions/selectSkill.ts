import Hero from "../../Hero/Hero";

import { prompt } from 'enquirer';
import skillRequire from "../../Interfaces/skillRequire";

/**
 * Asynchronous function to select a skill for a hero.
 * 
 * @param hero The hero object for which to select a skill.
 * @returns A promise that fetch to the selected skill or null if the user goes back.
*/
async function selectSkill(hero: Hero) : Promise<skillRequire | null> {
    let skills: string[] = hero._job.getSkillAvailable() as string[]
    if (skills.length === 0) return null
    skills.push('Back')
    let questions = {
        type: 'select',
        name: 'skill',
        message: `Select a skill for ${hero.getName()}`,
        choices: skills
    }

    let res: { skill: string } = await prompt(questions)
    return hero._job.getSkills().find((skill: skillRequire) => skill.skill.getName() === res.skill) || null
}

export default selectSkill;