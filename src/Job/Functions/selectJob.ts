import BeginHero from "../../Interfaces/BeginHero"

import Mage from "../Class/Mage";
import Warrior from "../Class/Warrior";
import Priest from "../Class/Priest";
import Job from "../Class/Job";

const classes: any = { Mage, Warrior, Priest };

function selectJob(job: string) : Job {
    return new classes[job](job);
}

export default selectJob;