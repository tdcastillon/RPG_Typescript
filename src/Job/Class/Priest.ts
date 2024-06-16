import SkillRequire from '../../Interfaces/skillRequire';
import InitStats from '../../Stats/InitStats';
import Job from "./Job";

// Skills
import Praise from '../../Skills/Skills/Healing/PraiseSkill';

/**
 *  A class representing the Priest job.
 * @extends Job
 */
class Priest extends Job {

    /**
     * Constructor for the Priest class.
     */
    constructor() {
      let stats: InitStats = {
        HP: 50,
        MAX_HP: 50,
        MP: 80,
        MAX_MP: 80,
        ATK: 5,
        DEF: 2,
        MAT: 15,
        MDF: 15,
        EXP: 0,
        FULL_EXP: 25,
        LVL: 1,
      };
  
      super("Priest", stats, 0.75);
    }

      /**
   * list of skils learn by the mage
  */
  
  skills: Array<SkillRequire> = [
    {
      skill: new Praise(),
      level: 1
    }
  ]
}

export default Priest;