import Mage from "../Class/Mage";
import Warrior from "../Class/Warrior";
import Priest from "../Class/Priest";
import Job from "../Class/Job";

const classes: any = { Mage, Warrior, Priest };

/**
 * 
 * @param job - The job of the hero (Mage, Warrior, Priest)
 * @returns {Job}
 *  This function will return the job of the hero
 */
function selectJob(job: string) : Job {
    return new classes[job](job);
}

export default selectJob;