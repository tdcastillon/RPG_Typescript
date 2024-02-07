import InitStats from './InitStats';

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

    getProperty<K extends keyof Stats>(key: K): number {
        return this[key] as number;
    }

    setProperty<K extends keyof Stats>(key: K, value: number) {
        (this as any)[key] = value;
    }

    levelUp(new_level: number, multiplier: number, based_stats: Stats) {
        this.LVL = new_level;
        let stats_to_augment = ['HP', 'MAX_HP', 'MP', 'MAX_MP', 'ATK', 'DEF', 'MAT', 'MDF', 'EXP', 'FULL_EXP'];
        stats_to_augment.forEach((stat: string) => {
            (this as any)[stat] = Math.floor(based_stats.getProperty(stat as keyof Stats) * (1 + (new_level - 1) * multiplier));
        });
    }
}

export default Stats;