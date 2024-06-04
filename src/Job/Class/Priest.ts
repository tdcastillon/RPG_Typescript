import InitStats from '../../Stats/InitStats';
import Job from "./Job";

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
        HP: 80,
        MAX_HP: 80,
        MP: 80,
        MAX_MP: 80,
        ATK: 5,
        DEF: 10,
        MAT: 10,
        MDF: 15,
        EXP: 0,
        FULL_EXP: 25,
        LVL: 1,
      };
  
      super("Priest", stats, 0.75);
    }
}

export default Priest;