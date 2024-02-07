import InitStats from './InitStats';

class Stats {
    public HP: number;
    public MAX_HP: number;
    public MP: number;
    public MAX_MP: number;
    public ATK: number;
    public DEF: number;
    public MAT: number;
    public MDF: number;
    public EXP: number;
    public FULL_EXP: number;
    public LVL: number;

    constructor(stats: InitStats) {
        this.HP = stats.HP;
        this.MAX_HP = stats.MAX_MP;
        this.MP = stats.MP;
        this.MAX_MP = stats.MAX_MP;
        this.ATK = stats.ATK;
        this.DEF = stats.DEF;
        this.MAT = stats.MAT;
        this.MDF = stats.MDF;
        this.EXP = stats.EXP;
        this.FULL_EXP = stats.FULL_EXP;
        this.LVL = stats.LVL;
    }

    getProperty<K extends keyof Stats>(key: K): number {
        return this[key] as number;
    }
}

export default Stats;