import Job from "../Job/Class/Job";

/**
 * @description Interface to create a Hero in the Game
 * @property {string} name - the name of the hero
 * @property {Job} job - the job of the hero
*/
interface BeginHero {
    name: string;
    job: Job;
}

export default BeginHero;