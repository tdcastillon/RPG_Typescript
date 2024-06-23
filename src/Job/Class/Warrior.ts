import InitStats from '../../Stats/InitStats';
import Job from "./Job";

/**
 *  A class representing a Warrior job.
 * @extends Job
 */
class Warrior extends Job {

    /**
     * Constructor for the Warrior class.
     */
    constructor() {

      let stats: InitStats = {
        HP: 75,
        MAX_HP: 75,
        MP: 20,
        MAX_MP: 20,
        ATK: 10,
        DEF: 5,
        MAT: 5,
        MDF: 5,
        EXP: 0,
        FULL_EXP: 25,
        LVL: 1,
      };
      super("Warrior", stats, 0.35);
    }
  }

export default Warrior;