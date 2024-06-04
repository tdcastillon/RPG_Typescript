import Stats from "../../Stats/Stats";
import InitStats from '../../Stats/InitStats';
import SkillRequire from "../../Interfaces/skillRequire";

/**
 *  Represents a job or profession in the game.
 */
class Job {

    /**
     * The name of the job.
     */
    private readonly name: string;

    /**
     * The stats associated with the job.
     */
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

    /**
     * An array of skills required for the job.
     */
    protected skills: Array<SkillRequire> = [];

    /**
     * The base stats of the job, without any modifications.
     */
    protected based_stats: Stats = this.stats;

    /**
     * Constructor for the Job class.
     * 
     * @param name The name of the job.
     * @param stats The initial stats of the job.
     * @param multiplier An optional multiplier for the job's stats.
     */
    constructor(name: string, stats: InitStats, private multiplier: number = 0) {
        this.name = name;
        this.stats = new Stats(stats);
        this.based_stats = this.stats;
    }

    /**
     * Returns the name of the job.
     * 
     * @return The name of the job.
     */
    getName(): string {
        return this.name;
    }

    /**
     * Returns all the stats associated with the job.
     * 
     * @return The stats of the job.
     */
    getAllStats(): Stats {
        return this.stats;
    }

    /**
     * Returns the base stats of the job, without any modifications.
     * 
     * @return The base stats of the job.
     */
    getBasedStats(): Stats {
        return this.based_stats;
    }

    /**
     * Returns the multiplier associated with the job.
     * 
     * @return The multiplier of the job.
     */
    getMultiplier(): number {
        return this.multiplier;
    }

    /**
     * Returns an array of available skills for the job.
     * 
     * @return An array of skill names.
     */
    getSkillAvailable(): string[] {
        let skills: string[] = [];
        for (let i = 0; i < this.skills.length; i++) {
            skills.push(this.skills[i].skill.getName());
        }
        return skills;
    }

    /**
     * Returns an array of skills required for the job.
     * 
     * @return An array of SkillRequire objects.
     */
    getSkills(): Array<SkillRequire> {
        return this.skills;
    }
}

export default Job;