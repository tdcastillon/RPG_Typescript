import InitStats from './InitStats';

/**
 *  A class representing the stats of the player.
 */
class Stats {
    public HP: number = 0;
    public MAX_HP: number = 0;
    public MP: number = 0;
    public MAX_MP: number = 0;
    public ATK: number = 0;
    public DEF: number = 0;
    public MAT: number = 0;
    public MDF: number = 0;
    public EXP: number = 0;
    public FULL_EXP: number = 0;
    public LVL: number = 0;

    constructor(stats: InitStats) {
        Object.assign(this, stats);
    }

    /**
     *  Returns the value of a given property.
     * 
     * @param key The key of the property.
     * @return The value of the property.
     */
    getProperty<K extends keyof Stats>(key: K): number {
        return this[key] as number;
    }

    /**
     *  Sets the value of a given property.
     * 
     * @param key The key of the property.
     * @param value The value to set.
    */
    setProperty<K extends keyof Stats>(key: K, value: number) {
        (this as any)[key] = value;
    }

    /**
     *  Returns the value of the property HP.
     * 
     * @return The value of the property HP.
     */
    getHP(): number {
        return this.HP;
    }

    /**
     *  Function to calculate stats when leveling up
     * 
     * @property {number} new_level - the new level of the entity
     * @property {number} multiplier - by how much are stats increased
     * @property {Stats} based_stats - the basic stats of the entity
    */
    levelUp(new_level: number, multiplier: number, based_stats: Stats) {
        this.LVL = new_level;
        let stats_to_augment = ['HP', 'MAX_HP', 'MP', 'MAX_MP', 'ATK', 'DEF', 'MAT', 'MDF', 'EXP', 'FULL_EXP'];
        stats_to_augment.forEach((stat: string) => {
            (this as any)[stat] = Math.floor(based_stats.getProperty(stat as keyof Stats) * (1 + (new_level - 1) * multiplier));
        });
    }
}

export default Stats;