import Stats from "../../Stats/Stats";
import InitStats from '../../Stats/InitStats';
import SkillRequire from "../../Interfaces/skillRequire";

class Job {

    private readonly name: string;
    private readonly stats: Stats = new Stats({
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

    protected skills: Array<SkillRequire> = []
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

    getSkillAvailable() : string[] {
        let skills: string[] = []
        for (let i = 0; i < this.skills.length; i++) {
            skills.push(this.skills[i].skill.getName())
        }
        return skills;
    }

    getSkills() : Array<SkillRequire> {
        return this.skills;
    }

}

export default Job;