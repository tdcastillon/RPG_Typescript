import Stats from "../../Stats/Stats";
import InitStats from '../../Stats/InitStats';
import Job from "./Job";

class Mage extends Job {

    constructor() {
        let initStats: InitStats = {
            HP: 60,
            MAX_HP: 60,
            MP: 100,
            MAX_MP: 100,
            ATK: 5,
            DEF: 5,
            MAT: 15,
            MDF: 15,
            EXP: 0,
            FULL_EXP: 100,
            LVL: 1,
        };

        super("Mage", initStats);
    }
}

export default Mage;