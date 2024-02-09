import InitStats from '../../Stats/InitStats';
import Job from "./Job";

class Warrior extends Job { 

    constructor() {
        let stats: InitStats = {
            HP: 100,
            MAX_HP: 100,
            MP: 20,
            MAX_MP: 20,
            ATK: 10,
            DEF: 10,
            MAT: 5,
            MDF: 5,
            EXP: 0,
            FULL_EXP: 100,
            LVL: 1,
        };
        super("Warrior", stats, 0.35);
    }
}

export default Warrior;