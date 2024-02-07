import InitStats from '../../Stats/InitStats';
import Job from "./Job";

class Priest extends Job {

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

    levelUp(new_level: number) {
        super.levelUp(new_level);
    }
}

export default Priest;