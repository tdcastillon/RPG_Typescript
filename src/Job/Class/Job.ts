import Stats from "../../Stats/Stats";
import InitStats from '../../Stats/InitStats';

class Job {

    private name: string;
    private stats: Stats = new Stats({
        HP: 0,
        MAX_HP: 0,
        MP: 0,
        MAX_MP: 0,
        ATK: 0,
        DEF: 0,
        MAT: 0,
        MDF: 0,
        EXP: 0,
        FULL_EXP: 0,
        LVL: 0,
    } as InitStats);

    protected based_stats: Stats = this.stats;

    constructor(name: string, stats: InitStats, private multiplier: number = 0) {
        this.name = name
        this.stats = new Stats(stats);
        this.based_stats = this.stats;
    }

    getName(): string {
        return this.name;
    }

    getAllStats(): Stats {
        return this.stats;
    }

    getBasedStats(): Stats {
        return this.based_stats;
    }

    getMultiplier(): number {
        return this.multiplier;
    }
}

export default Job;